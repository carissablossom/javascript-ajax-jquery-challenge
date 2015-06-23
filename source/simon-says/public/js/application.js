$(document).ready(function(){

    $('a').on("click", function(event){
      event.preventDefault();

      var path = "/color"
      // var form =

      request = $.ajax({
        url: path,
        type: "POST",
        dataType: "JSON"
      })

      request.done(function(response){
        $('li:nth-child('+ response.cell +')').css("background-color", response.color);
      })

      request.fail(function(response){
        console.log(response);
      })

    })

});
