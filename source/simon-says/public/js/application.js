$(document).ready(function(){
  changeColor();
});

var changeColor = function() {
  $("#get_color").on("click", function(event){
      event.preventDefault();

      //form.serialize();
      //returns data as a query string
      //description=a&size&magic=panda
      //name = magic, value = panda
      //key = magic, value = panda
      // jquery sends query string to the server instead of JSON

      //everything above here is just grabbing data from the DOM

      $.ajax({
        // specifies which route you're going to extra data from
        // data has to be a hash or a string,  you can save this as a variable
        type: "post",
        url: '/color',
        dataType: 'json'
      })

      .done(function(response) {
        $( "ul#color_me li:nth-child(" + response.cell +")").css("background-color", response.color);
      })

      .fail(function(response) {
        console.log("Color information not found. Check code for changeColor();", response);
      })
  })

};



