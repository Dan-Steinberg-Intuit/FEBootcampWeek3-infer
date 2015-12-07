define([], function() {

	var UserModel = Backbone.Model.extend({
    	defaults: {
    		account_type: "Standard",
    		signup_date: "1/1/1970"
    	},
    	initialize: function() {
    		console.log("Intialized: " + JSON.stringify(this.attributes));
    	}
    });

    return UserModel;
});