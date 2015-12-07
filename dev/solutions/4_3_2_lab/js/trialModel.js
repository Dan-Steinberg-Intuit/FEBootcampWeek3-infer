define([], function(){

  // Define a Trial Model with defaults and an initializer
  var TrialModel = Backbone.Model.extend({
    defaults: {
      img_src: 'placeholder.gif'
    },
  });
  return TrialModel;
});