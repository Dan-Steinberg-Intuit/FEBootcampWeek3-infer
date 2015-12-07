require(["UserModel"], function(UserModel){
	// Test that jQuery is loaded
	$('.target').html('jQuery is working <br>');

	// Test that Underscore is loaded
	if (_.contains([1, 2, 3], 3)) {
    	$('.target').append('Underscore is working <br>');
    }

    // Test that Backbone is working
    var model = new Backbone.Model({isWorking: 'working'});
    $('.target').append('Backbone is ' + model.get('isWorking'));


    var Dan = new UserModel();
    Dan.set("name", "Dan");
    console.log("Dan's name = " + Dan.get("name"));
    console.log("Dan = " + JSON.stringify(Dan));

    var Roger = new UserModel();
    Roger.set({
    	name: "Roger",
    	account_type: "Free",
    	signup_date: "12/31/2014",
    	business_category: "manufacturing"
    });
    console.log("Roger's name = " + Roger.get("name"));
    console.log("Roger's account type = " + Roger.get("account_type"));
    console.log("Roger's signup date = " + Roger.get("signup_date"));
    console.log("Roger's business category = " + Roger.get("business_category"));
    console.log("Roger = " + JSON.stringify(Roger));

    var Craig = new UserModel();
    console.log("Craig = " + JSON.stringify(Craig));

});