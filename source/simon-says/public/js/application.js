$(document).ready(function(){
  clickButton();
});


var clickButton = function() {
  $('#get_color').on('click', function(e){
    e.preventDefault();
    // alert("success");

    var path = "/color";
    var request = $.ajax({
      url: path,
      type: "post",
    })
    request.done(function(response){
      var cell_box = $('#color_me li:nth-child('+response.cell+')');
      cell_box.css({"background-color": response.color});
    })

    request.fail(function(error){
      alert("your ajax call failed");
    });
  });
};




//disregard shit below. was just replicating for muscle memory
// var clickButton = function() {
//   $('#get_color').on('click', function(e){
//     e.preventDefault();

//     var path = "/color";
//     var request = $.ajax({
//       url: path,
//       type: "post",
//     });

//     request.done(function(response){

//       var cell_box = $('#color_me li:nth-child('+response.cell+')')
//       cell_box.css({"background-color": response.color});
//     });

//     request.fail(function(error){
//       console.log("failed");
//       alert("ajax call failed");
//     });

//   });
// };


// var clickButton = function(){
//   $('#get_color').click(function(e) {
//     e.preventDefault();
//     var path = "/color"

//     var request = $.ajax({
//       type: 'post',
//       url: path,
//     });

//     request.done(function(response){
//       var cell = $('#color_me li:nth-child('+response.cell+')');
//       cell.css({"background-color": response.color});
//     });

//     request.fail(function(error){
//       console.log("Your ajax request failed");
//       alert("Your ajax request failed");
//     });
//   });
// };
