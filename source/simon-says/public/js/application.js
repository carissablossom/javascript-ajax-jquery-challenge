$(document).ready(function(){

	$('#get_color').on('click', function(event) {
		event.preventDefault();

		var request = $.ajax({
			url: '/color',
			type: 'post',
			dataType: 'json'
		})

		request.done(function(response) {
			console.log('SUCCESS', response)

			$('#color_me li:nth-child(' + response.rand_cell + ')').css('background-color', response.rand_color)

		})

		request.fail(function(response) {
			console.log('FAIL', response)
		})

	});
	
});
