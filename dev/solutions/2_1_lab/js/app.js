require([], function(){
  // jQuery Test
  $('.target').html('jQuery is working <br>');

  // Underscore Test
  if (_.contains([1, 2, 3], 3)) {
    $('.target').append('Underscore is working <br>');
  }

  // Backbone Test
  var model = new Backbone.Model({isWorking: 'working'});
  $('.target').append('Backone is ' + model.get('isWorking'));
  console.log('hello');
});