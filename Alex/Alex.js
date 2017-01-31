// Include a document ready function to ensure the functions render after HTML has loaded
$(document).ready(function() {

  // Attach a submit handler to the form
  $("#form").submit(function(e) {
    e.preventDefault()
    // Get some values from elements on the page:
    // 1 Return the value attribute of #engligh-text
    let textToTranslate = $("#form").find("#english-text").val()
    // 2 Define "url" as the url we wish to request combined with the text we wish to translate
    let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate

    // Send the request to translate using $.get(url, callback), where "url" is the url we wish to request (defined above), and "callback" is the name of a function to be executed if the request succeeds
    $.get(url, function(translation) {

    //Remove all child nodes (including text nodes) from the result div before inserting the new translation into the result div
      $("#result").empty().append(translation);
    });
  })
})
