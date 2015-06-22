$(document).ready(function(){
  changeColor();
});

var changeColor = function() {
  $("#get_color").on("click", function(event){
      event.preventDefault();

      //form.serialize();
      //returns data as a query string
      //description=a&size&magic=panda
      //name = magic, value = panda
      //key = magic, value = panda
      // jquery sends query string to the server instead of JSON

      //everything above here is just grabbing data from the DOM

      $.ajax({
        // specifies which route you're going to extra data from
        // data has to be a hash or a string,  you can save this as a variable
        type: "post",
        url: '/color',
        dataType: 'json'
      })

      .done(function(response) {
        // insert jquery
        console.log(response);
      })

      .fail(function(response) {
        console.log("Color information not found. Check code for changeColor();", response);
      })
  })

};

// var switchLogintoSignUp = function(){
//   $("#signup").on("click", function(event){
//       var url = $(this).attr("href");

//       event.preventDefault();

//       $.ajax({
//         type: "get",
//         url: url,
//       })

//       .done(function(response){
//           $("#splash").append(response);
//           $("#login-form").hide();
//           $("#signup-form").show();
//       })

//       .error(function(response){
//         console.log("Information not sent. Check code for SwitchLoginSignUp();", response);
//       })
//   })
// };


