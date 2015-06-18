$(document).ready(function(){
clickButton();
});



clickButton = function(){  $('a').on('click', function(element){
    element.preventDefault();

    var request = $.ajax({
      method: 'post',
      url: '/color',
      dataType: 'json',
    });

    request.done(function(response){
      var cell = response.cell;
      console.log(response.cell);
      $("#color_me li:nth-child("+ cell +")").css('background-color', response.color);
    });
  });
}