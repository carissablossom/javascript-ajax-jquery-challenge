$(document).ready(function(){
  colorListener();
});

var colorListener = function(){
  $('.container').on("click", "#get_color", function(event){
    event.preventDefault();

    request = $.ajax({
      url: '/color',
      dataType: "JSON",
      type: 'POST',
    });

    request.done(function(response){
      cellSelector = '#color_me li:nth-child('+response.cell+')'
      newColor = response.color;
      $(cellSelector).css({"background-color":newColor});
    });

    request.fail(function(response){
      console.log("FAIL");
      alert("FAIL");
    });
  });
};
