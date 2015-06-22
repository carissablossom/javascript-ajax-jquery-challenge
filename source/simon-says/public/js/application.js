$(document).ready(function(){
clickButton();
});

var clickButton = function(){
  $('#get_color').click(function(e) {
    e.preventDefault();
    var path = $(this).attr('href');

    var request = $.ajax({
      type: 'post',
      url: path,
    });

    request.done(function(response){
      var cell = $('#color_me li:nth-child('+response.cell+')');
      cell.css({"background-color": response.color});
    });

    request.fail(function(error){
      console.log("Your ajax request failed");
      alert("Your ajax request failed");
    });
  });
};



// #what is the point of json?? data type
