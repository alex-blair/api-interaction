// Include a document ready function to ensure the functions render after HTML has loaded:
$(document).ready(function() {

  // Attach a submit handler to the form (this is a function that will execute each time a user attempts to submit the form. A user can submit a form by clicking <button type="submit">, or by pressing Enter, so in this case if the user presses enter instead of clicking the Translate Now button the function will still execute):
  $("#form").submit(function(event) {
    // Stop form from submitting normally so that the function will run when the user attempts to submit the form:
    event.preventDefault()
    // Get some values from elements on the page:
    // 1 Return the value the text we want to translate:
    let textToTranslate = $("#form").find("#english-text").val()
    // 2 Define new url variable so that the text we want to translate is added to the end of the API url when we make a request:
    let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate

    // Use $.get(url, callback) to translate the text, where "url" is the url we wish to request (defined above), and "callback" is the name of a function to be executed if the request succeeds:
    $.get(url, function(translation) {
    //Remove all child nodes (including text nodes) from the result div using .empty() before inserting the new translation into the result div using .append():
      $("#result").empty().append(translation);
    });
  })
})
