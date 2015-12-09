define([], function() {
	var BoxModel = Backbone.Model.extend({
		defaults: {
			imageURL: "placeholder.gif"
		}
	});

	return BoxModel;
});