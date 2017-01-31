/*
Our App will Translate a given word or phrase from English into Maori using the Google Translate API.

Endpoints

https://eda-te-reo.herokuapp.com/api/translate

Translates a given word or phrase from Maori into English using the Google Translate API.
Sample usage: send a request to https://eda-te-reo.herokuapp.com/api/translate?word=seafood.
Sample response: kaimoana.
A GET request to this endpoint returns a JSON response containing source text in Maori and a translation.

{
  "source": "Te wahie ka waia mo takurua, te kai ka mahia mo tau.",
  "translation": "Firewood is sought for winter, food is laboured after for the year.\n\nMeaning: Be usefully employed."
}

The translations and accompanying comments were formatted to JSON from "Transactions and Proceedings of the Royal Society of New Zealand 1868-1961", particularly a work written in 1879 and hosted here: http://rsnz.natlib.govt.nz/volume/rsnz_12/rsnz_12_00_001250.html. It seems to be relatively respectful in its tone, but should be considered a product of its time.

//Questions
*/

//Highlevel plan of attack

// 1 Setup function call to API following $AJAX materials

// 2 Setup Basic HTML page for input, and response text.  Pass the input to the function, on submit send function call with input variable to api/

// 3 Receive response.  Create eventlisteners to then populate HTML.innerHTML with the responseText.

// 4. Add some CSS to make it look pretty.


//UI Plan of attack

//1. Page loads and user is presented with an example translation.  No blank page on start.

//2. Input box given focus and small prompt or text above/below instructing them on what to do.

//3. A beautiful Translate Now button.

//4. Keep layout simple.  Use Skeleton Framework.

// document.addEventListener('DOMContentLoaded', startGame)


$.ajax({
  url: 'https://eda-te-reo.herokuapp.com/api/translate',
  type: 'GET',
  dataType: 'json',
  data: {"word": input },
})
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
