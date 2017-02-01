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
