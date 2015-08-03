$(document).ready(function(){
  $('#get_color').on('click',function(){
    var $boxes = $('#color_me').children();

    $.ajax({
      url: '/color',
      type: 'post',
    }).done(function(response){
      var $box = $( "ul li:nth-child("+ response.cell + ")" );
      $box.css({backgroundColor: response.color});
    }).fail(function(response){
      alert(response)
    })

  })
});