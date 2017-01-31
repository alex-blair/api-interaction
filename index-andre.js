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
// .done(function() {
//   console.log("success". res);
// })
.fail(function() {
  console.log("error", err);
})
.always(function() {
  console.log("complete");
});
