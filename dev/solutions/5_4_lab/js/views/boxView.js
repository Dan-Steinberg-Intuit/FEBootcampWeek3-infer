define([], function(){

  // Define a Box View
  var BoxView = Backbone.View.extend({

    template: _.template($('#cta-box-tpl').html()),

    render: function(){
      var box_tpl = this.template(this.model.toJSON());
      this.$el.html(box_tpl);
      return this;
    },

    events: {
      'click .remove': 'removeMe'
    },
    removeMe: function() {
      this.remove();
    },
  });
  
  return BoxView;
});