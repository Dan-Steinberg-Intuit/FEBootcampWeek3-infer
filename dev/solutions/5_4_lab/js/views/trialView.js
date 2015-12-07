define([], function(){

  // Define an Trial View
  var TrialView = Backbone.View.extend({
    el: '.trial-warning',
    template: _.template($('#trial-tpl').html()),

    render: function(){
      var item_tpl = this.template(this.model.toJSON());
      this.$el.append(item_tpl);
      return this;
    }
  });
  return TrialView;
});