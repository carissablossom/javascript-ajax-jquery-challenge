var hexcolors = ['Aqua', 'Red', 'Maroon', 'Yellow', 'Olive', 'Lime', 'Green', 'Aqua', 'Teal', 'Blue', 'Navy', 'Fuchsia', 'Purple'];

$(document).ready(function(){

  $('#get_color').on('click', function(event){
    // var color = hexcolors[Math.floor(Math.random()*hexcolors.length)];
    // var square = Math.floor((Math.random()* $('ul li').length )+1);
    // var selector = "ul li:nth-child(" + square.toString() + ")";
    // $(selector).css("background-color", color);

    event.preventDefault();
    $.ajax({
      url: "/color",
      method: "POST",
      dataType: "json",
      success: getColors = function(data) {
        $("#color_me li:nth-child(" + data.cell + ")").css("background-color", data["color"]);
        console.log("it works, hurray!")
      }
    });
  });

});
