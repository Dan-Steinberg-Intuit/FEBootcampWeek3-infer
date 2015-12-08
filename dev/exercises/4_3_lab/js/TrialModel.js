define([], function(){
	
	var TrialModel = Backbone.Model.extend({
		defaults: {
			trial_days_left: 30
		}
	});

	return TrialModel;
});