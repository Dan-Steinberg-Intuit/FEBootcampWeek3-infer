define([], function() {

	var TrialOverView = Backbone.View.extend({
		el: ".target",

		render: function() {
			this.$el.html("Your trial period has ended"); 
		}
	});

	return TrialOverView;

});