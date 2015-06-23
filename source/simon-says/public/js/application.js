$(document).ready(function(){
  $('a#get_color').on("click", function(event){
    event.preventDefault();

    var path = $(this)

    // debugger
    request = $.ajax({
      url: "/color",
      type: "POST"
    })

    request.done(function(response){
      console.log(response);
      $('#color_me li:nth-child('+response.cell+')').css("background-color", response.color)
    })

    request.fail(function(response){
      console.log(response);
      console.log("you suck");
    })
  })
});
