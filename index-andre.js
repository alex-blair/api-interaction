var input = "Seafood is very very good"

var response = [];

$.ajax({
  url: 'https://eda-te-reo.herokuapp.com/api/translate',
  type: 'GET',
  dataType: 'text',
  data: {"word": input },
  success: function(data) {
    console.log('success', data)
    response.push(data);
  }
})
.fail(function() {
  console.log("error", err);
})
.always(function() {
  console.log("complete");
});


let firstChild = document.getElementById("prev").firstChild;
if (firstChild) {
  $("p").addClass("hide");
}


$("#twitter-share-button").click(function(event) {
  event.preventDefault()

}

<a class="twitter-share-button" href="https://twitter.com/share" data-size="large" data-text="translated text?" data-hashtags="#EDA #WEEK7 #TRANLATED" data-via="twitterdev" data-related="twitterapi,twitter">Tweet</a>


                <!-- <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=cat" data-size="large" data-hashtags="#EDA #WEEK7 #TRANLATED" data-via="twitterdev" data-related="twitterapi,twitter">Tweet</a> -->

                <!-- <a class="twitter-share-button" href="https://twitter.com/share" data-size="large" data-text="" data-hashtags="#EDA #WEEK7 #TRANLATED" data-via="twitterdev" data-related="twitterapi,twitter">Tweet</a> -->

                <!-- <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=cat" data-size="large" text="cat2">Tweet</a> -->

                <!-- <a class="twitter-share-button" href="https://twitter.com/share" data-size="large" data-text="" data-hashtags="#EDA #WEEK7 #TRANLATED" data-via="twitterdev" data-related="twitterapi,twitter">Tweet</a> -->
                <!--
                /* From here https://dev.twitter.com/web/tweet-button/parameters */
                <button id="twitter-button"><a href="https://twitter.com/share" class="twitter-share-button" data-show-count="false" text="Translated">Tweet</a></button> -->
