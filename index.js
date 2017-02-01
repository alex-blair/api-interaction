$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault()
    let textToTranslate = $("#english-text").val()
    let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate

    // AJAX API Call
    $.ajax({
      url: url,
      type: 'GET',
      error: handleError,
      success: function(data) {
        if(data.includes('specify')) {
          handleError(data)
        } else {
          // document.getElementByID("result").innerHTML = data;
          // var tweetString = textToTranslate + " = " + data;
          $("#result").html(textToTranslate + " = " + data);
          $("#prev").append("<p>" + textToTranslate + " = " + data + "</p>");
          $("#twitter-wrapper").html(
            '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + data + '" data-size="large" text="cat2">Tweet</a>'
          )
        }
      }
    })
  })
})

let handleError = function (err) {
  $("#result").html("The Maori translation of nothing is still nothing");
}
