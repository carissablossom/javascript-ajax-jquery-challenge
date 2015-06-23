$(document).ready(function(){
  simonColor();
});

var simonColor = function() {
  $('#get_color').on('click', function(event){
    event.preventDefault();

    var url = '/color';
    var method = 'post'

    var request = $.ajax({
      url: url,
      type: method,
      datatype: "json"
      // data: ,
    })

    request.done(function(response){
      console.log('success', response);
      $('ul li:nth-child(' + response["cell"] + ')').css("background", response["color"])
    })

    request.fail(function(response){
      console.log("Fail, check simonColor();", response);
    })

  })

};
