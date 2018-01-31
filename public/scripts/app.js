/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

const data = [
    {
    "user": {
        "name": "Newton",
            "avatars": {
              "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
              "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
              "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": {
              "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
              "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
              "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        },
        {
          "user": {
            "name": "Johann von Goethe",
            "avatars": {
              "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
          },
          "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          "created_at": 1461113796368
        }
      ];
  


function createTweetElement(data) {
    let newUser = data.user.name;
    let newAvatar = data.user.avatars.small;
    let newHandle = data.user.handle;
    let newText = data.content.text;

    console.log(newUser);
    console.log(newAvatar);
    console.log(newHandle);
    console.log(newText);

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

function renderTweets(data) {
    for (let i in data) {
        let showTweets = createTweetElement(data[i]);
        $('.show-tweets').append(showTweets);
    }
}

renderTweets(data);
})
  



// function createTweetElement(tweetData) {
//      $('<article>')
//         .append(tweetData.user.name).addClass(".show-tweets h2")
//         .append(tweetData.user.avatars.small).addClass(".show-tweets .avatar")
//         .append(tweetData.user.handle).addClass(".show-tweets div")
//         .append(tweetData.content.text).addClass(".show-tweets .text")
//         .appendTo(".show-tweets");
// }
