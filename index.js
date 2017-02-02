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
          var tweetString = textToTranslate + " = " + data + " " + "#EDA #learnMaori #translationapp";
          tweetString = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetString).replace(/%20/g,'+');
          $("#result").html(textToTranslate + " = " + data);
          $("#prev").append("<p>" + textToTranslate + " = " + data + "</p>");
          $("#tweet").attr('href',tweetString)
        }
      }
    })
  })
})

let handleError = function (err) {
  $("#result").html("The Maori translation of nothing is still nothing");
}
