$(document).ready(function(){

});

var colorListener = function(){
  $('.container').on("click", "#get_color", function(event){
    event.preventDefault();

    request = $.ajax({
      url: '/color',
      dataType: "JSON",
      type: 'POST',

    });
  };
};
