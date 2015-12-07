define([], function(){
  // Define a Box Model
  var BoxModel = Backbone.Model.extend({
    defaults: {
      img_src: 'placeholder.gif'
    },
  });
  return BoxModel;
});