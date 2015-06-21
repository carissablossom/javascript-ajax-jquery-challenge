$(document).ready(function(){
  $('#get_color').on('click',function(event){
    event.preventDefault();

    $.ajax({
      url: "/color",
      method: "POST",
      dataType: "json"
    })
    .done(
      function(data){
        $("#color_me li:nth-child(" + data.cell + ")").css("background-color", data.color);
    })
  })
});
