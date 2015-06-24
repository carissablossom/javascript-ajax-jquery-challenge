
var getColorListener = function () {
  $('#get_color').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: "/color",
      type: "POST"
    })
    .done(function(response){

     updateDOM(response);
     console.log
    })

    .fail(function(response){
      console.log("you fucked up");
      console.log(response);

    })
  });
}


var updateDOM = function(response) {
  $('#color_me li:nth-child(' + response.cell + ')').css('background-color', response.color)
}



$(document).ready(function(){
  getColorListener()
});


/*
  VERY BROAD STROKES
  clicking a button
  change a random cell to a random color

  broad strokes
  clicking a button
  prevent that buttons default
  get random cell info from server
  update our DOM with info from the server


  finer points
    clicking a button
      - write a click event listener for "click me" button
      -
    prevent that buttons default
      - click listener prevents the buttons default action

    get random cell info from server
      - AJAX request to server
        - url: /color
        - type: "POST"

      - SERVER SIDE
        - give us a valid response
        - return status 200
        - return some JSON
        - return random cell and random color in JSON format


    update our DOM with info from the server
      - AJAX all good
        - verify our data
        - update a cell based on returned cell number with returned cell color

      - AJAX tottallly f'ed
        - verify our data
        - alert user to failure
*/


































