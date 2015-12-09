define([], function(){
	
	var TrialModel = Backbone.Model.extend({
		defaults: {
			trial_days_left: 30,
			img_src: "placeholder.gif"
		}
	});

	return TrialModel;
});