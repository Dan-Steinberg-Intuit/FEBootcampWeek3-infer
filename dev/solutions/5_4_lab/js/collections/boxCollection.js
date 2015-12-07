define(['../models/boxModel'], function(BoxModel){

  // Define a Collection
  var BoxCollection = Backbone.Collection.extend({
    model: BoxModel
  });

  return BoxCollection;
});