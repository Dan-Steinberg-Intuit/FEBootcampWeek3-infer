define(['views/boxView'], function(BoxView){

  // Define a Collection View
  var BoxCollectionView = Backbone.View.extend({
    el: '.cta-boxes-target',
    
    render: function(){
      this.collection.each(function(boxModel){
        var boxView = new BoxView({model: boxModel});
        Backbone.subViews.push(boxView);
        this.$el.append(boxView.render().el);
      }, this);
      
      return this;
    },

    removeAllViews: function() {
      _.each(Backbone.subViews, function(childView){
        childView.remove();
      });
    }
  });

  return BoxCollectionView;
});