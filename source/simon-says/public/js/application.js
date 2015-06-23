$(document).ready(function(){
  colorBoard();
});

var colorBoard = function(){

  $('#get_color').on("click", function(event){
    event.preventDefault();
    var path = '/color';
    var cell = $('#color_me li');
    var color = $('#color_me li').val();

    var request = $.ajax({
      url: path,
      type: "get"
    })
    request.done(function(response){
      console.log(response);
      console.log("SUCCESS!");
      $('#color_me li:nth-child('+response.cell+')').css("background-color", response.color)
    });
    request.fail(function(response){
      console.log(response);
      console.log("FAIL!!!");
    });
  });
};