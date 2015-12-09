define([], function() {

	var TrialView = Backbone.View.extend({
		el: ".target",
		template: _.template($("#trial-tpl").html()), 

		render: function() {
			var trial_tpl = this.template(this.model.toJSON());
			this.$el.html(trial_tpl); 
			return this;
		}
	});

	return TrialView;

});