/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

{/* <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script> */}

$(document).ready(function() {
  $("#tweets-container").hide()

  
function createTweetElement(data) {
  let newUser = `${escape(data.user.name)}`;
  let newAvatar = `${escape(data.user.avatars.small)}`;
  let newHandle = `${escape(data.user.handle)}`;
  let newText = `${escape(data.content.text)}`;

    return (`
    <article>
        <header>
            <img class="avatar" src=${newAvatar}>
            <h2>${newUser}</h2> 
            <div>${newHandle}</div>
        </header> 
            <div class="text">${newText}</div>
            <footer>
            <div>10 days ago</div>
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </footer>
    </article>
    `)
};

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

function renderTweets(data) {
  $('.show-tweets').html("");
  data.sort(function (a, b) {
    if (a.created_at > b.created_at) {
      return - 1;
    } else {
      return 1;
    }
  });
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

  loadTweets();


  // AUTO REFRESHER FOR NEW TWEETS WHEN MULTIPLE USERS
// $(window).load(function () {
//   setInterval(loadTweets, 500);
// })


  $("#nav-bar button").click(function () {
    $("#tweets-container").toggle("show"), function () {
    }
  });

  $("#nav-bar button").click(function () {
    $("#tweets-container textarea").focus();
  });










})