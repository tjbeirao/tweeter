/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

{/* <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script> */}

function createTweetElement(data) {
  let newUser = `${escape(data.user.name)}`;
  let newAvatar = `${escape(data.user.avatars.small)}`;
  let newHandle = `${escape(data.user.handle)}`;
  let newText = `${escape(data.content.text)}`;
  var postTime = `${escape(data.created_at)}`;
  let timeNow = (Date.now() + 1);
  var realTime = timeNow - postTime;

  return (`
    <article>
      <header>
        <img class="avatar" src=${newAvatar}>
          <h2>${newUser}</h2> 
          <div>${newHandle}</div>
      </header> 
        <div class="text">${newText}</div>
        <footer>
          <div>${showTime(realTime)}</div>
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </footer>
    </article>
  `)
};

function showTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hour = Math.floor(minute / 60);
  minute = minute % 60;
  let day = Math.floor(hour / 24);
  hour = hour % 24;

  if (day > 2) {
    return (day + " days ago");
  } else if (day === 1) {
    return (day + " day ago");
  } else if (day < 1 && hour > 2) {
    return (hour + " hours ago");
  } else if (day < 1 && hour === 1) {
    return (hour + " hour ago");
  } else if (day < 1 && hour < 1 && minute > 1) {
    return (minute + " minutes ago");
  } else if ((day < 1 && hour < 1 && minute === 1)) {
    return (minute + " minute ago");
  } else {
    return (seconds + " seconds ago");
  }
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function renderTweets(data) {
  $('.show-tweets').html("");
  data.forEach((data) => {
    var $showTweets = createTweetElement(data);
    $('.show-tweets').append($showTweets);
  });
};

function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: renderTweets
  });
}

$(document).ready(function () {

  $('form').on('submit', function (event) {
    event.preventDefault();
    let newTweet = $(this).serialize();
    if (newTweet.length <= 5 || newTweet === null) {
      alert("Empty Field or Invalid Text");
    } else if (newTweet.length > 145) {
      alert("Tweet with more than 140 characteres");
    } else {
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: newTweet,
        success: loadTweets
      });
    }
    $("#tweets-container").hide()
  });


  $("#tweets-container").hide()
  loadTweets();
    
  $("#nav-bar button").click(function () {
    $("#tweets-container").toggle("show"), function () {
    }
  });

  $("#nav-bar button").click(function () {
    $("#tweets-container textarea").focus();
  });

})


// AUTO REFRESHER FOR NEW TWEETS WHEN MULTIPLE USERS
// $(window).load(function () {
//   setInterval(loadTweets, 500);
// })