require([], function(){
	// Test that jQuery is loaded
	$('.target').html('jQuery is working <br>');

	// Test that Underscore is loaded
	if (_.contains([1, 2, 3], 3)) {
    	$('.target').append('Underscore is working <br>');
    }

    // Test that Backbone is working
    var model = new Backbone.Model({isWorking: 'working'});
    $('.target').append('Backbone is ' + model.get('isWorking'));
});