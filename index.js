$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault()
    let textToTranslate = $("#form").find("#english-text").val();
    let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate

    // AJAX API Call
    $.ajax({
      url: url,
      type: 'GET',
      error: handleError,
      success: function(data) {
        if(data.includes('Error')) {
          handleError(data)
        } else {
          // document.getElementByID("result").innerHTML = data;
          $("#result").html(data);
        }
      }
    })
  })
})

let handleError = function (err) {
  $("#result").html("Oops! " + err);
}
