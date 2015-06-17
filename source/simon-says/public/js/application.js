$(document).ready(function(){
  $("#get_color").click(function(event){
	event.preventDefault();
	$.ajax({
		url: "/color",
		method: "POST",
		dataType: "json",
		success: getColors = function(data) {
         $("#color_me li:nth-child(" + data.cell + ")").css("background-color", data["color"]);
         console.log("success");
        }
	});
  });
});