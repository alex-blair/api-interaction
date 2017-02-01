$(document).ready(function() {
  // $("#form").click(function(event) {
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
        if(data.includes('Error')) {
          handleError(data)
        } else {
          // document.getElementById("result").innerHTML = data;
          $("#result").html(data);
        }
      }
    })
  })
})

let handleError = function (err) {
  $("#result").html("Oops! " + err);
}

// //***********************************************************
//
// // Include a document ready function to ensure the functions render after HTML has loaded:
// $(document).ready(function() {
//   // Attach a submit handler to the form (this is a function that will execute each time a user attempts to submit the form. A user can submit a form by clicking <button type="submit">, or by pressing Enter, so in this case if the user presses enter instead of clicking the Translate Now button the function will still execute):
//   $("#form").submit(function(event) {
//     // Stop form from submitting normally so that the function will run when the user attempts to submit the form:
//     event.preventDefault()
//     // Get some values from elements on the page:
//     // 1 Return the value the text we want to translate:
//     let textToTranslate = $("#form").find("#english-text").val()
//     // 2 Define new url variable so that the text we want to translate is added to the end of the API url when we make a request:
//     let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate
//     // 3 Use Ajax function
//     $.ajax({
//       url: url,
//       type: 'GET',
//       error: handleError,
//       success: function(data) {
//         if(data.includes('Error')) {
//           handleError(data)
//         } else {
//           //Insert the new translation into a new div with the id "result" using .html(), which is the jQuery way of writing document.getElementById("result").innerHTML = data;
//           $("#result").html(data);
//         }
//       }
//     })
//   })
// })
//
// //Change the default message that the server sends when an error occurs
// let handleError = function (err) {
//   $("#result").html("Oops! " + err);
// }

// //***********************************************************
//
// // Another way of running the Ajax function using jQuery .get() - a shorthand Ajax function:
//
// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault()
//     let textToTranslate = $("#form").find("#english-text").val()
//     let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate
//     $.get(url, function(translation) {
//       $("#result").html(translation);
//     });
//   })
// })
//
// //***********************************************************
//
// // Include a document ready function to ensure the functions render after HTML has loaded:
// $(document).ready(function() {
//
//   // Attach a submit handler to the form (this is a function that will execute each time a user attempts to submit the form. A user can submit a form by clicking <button type="submit">, or by pressing Enter, so in this case if the user presses enter instead of clicking the Translate Now button the function will still execute):
//   $("#form").submit(function(event) {
//     // Stop form from submitting normally so that the function will run when the user attempts to submit the form:
//     event.preventDefault()
//     // Get some values from elements on the page:
//     // 1 Return the value the text we want to translate:
//     let textToTranslate = $("#form").find("#english-text").val()
//     // 2 Define new url variable so that the text we want to translate is added to the end of the API url when we make a request:
//     let url = "https://eda-te-reo.herokuapp.com/api/translate?word=" + textToTranslate
//
//     // Use $.get(url, callback) to translate the text, where "url" is the url we wish to request (defined above), and "callback" is the name of a function to be executed if the request succeeds:
//     $.get(url, function(translation) {
//     //Insert the new translation into the result div using .html():
//       $("#result").html(translation);
//     });
//   })
// })
