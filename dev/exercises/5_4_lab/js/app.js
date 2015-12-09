require(["BoxModel", "BoxView", "boxCollectionView"], function(BoxModel, BoxView, BoxCollectionView){
/*	// Test that jQuery is loaded
	$('.target').html('jQuery is working <br>');

	// Test that Underscore is loaded
	if (_.contains([1, 2, 3], 3)) {
    	$('.target').append('Underscore is working <br>');
    }

    // Test that Backbone is working
    var model = new Backbone.Model({isWorking: 'working'});
    $('.target').append('Backbone is ' + model.get('isWorking'));
*/

/*    var Dan = new UserModel();
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
    console.log("Roger again = " + Roger.)

    var Craig = new UserModel();
    console.log("Craig = " + JSON.stringify(Craig));
*/

 /*   var trialModel = new TrialModel({
        trial_days_left: 28,
        warning_img: "warning.png",
        img_alt: "trial warning image",
        subscribe_link: "infer.com/subscribe"
    });

    var trialView = new TrialView({model: trialModel});
    trialView.render();
*/

    // Set up the global subview array
    console.log("Main app started");
    Backbone.subviews = [];

    // Create the collection of Model items
    console.log("Creating box collection");
    var BoxModelCollection = Backbone.Collection.extend({model: BoxView});
    var boxes = new BoxModelCollection();
    console.log("boxes Collection initialized");

    // Create the Model items and add them to the collection
    var cta_box_1 = new BoxModel({
        imageURL: "cta-box-1.jpg",
        imageAltText: "Helpful Accountant",
        title: "Get set up by a pro", 
        text: "Let your accountant access your books and help you get set up."
    });
    boxes.push(cta_box_1);
    console.log("1st box initialized");

    var cta_box_2 = new BoxModel({
        imageURL: "cta-box-2.jpg", 
        imageAltText: "Mobile Action",
        title: "Go Mobile", 
        text: "Snap photos of receipts, create invoices, and more."
    });
    boxes.push(cta_box_2);
    console.log("2nd box initialized");

    // Create the view
    var boxCollectionView = new BoxCollectionView({collection: boxes});
    console.log("View initialized");
    boxCollectionView.render();
    console.log("View rendered");


    // Dynamically add another view
    var cta_box_3 = new BoxModel({
        imageURL: "cta-box-3.jpg", 
        imageAltText: "Helpful Expert",
        title: "Pay Employees", 
        text: "Let experts handle payroll and taxes for you, all within QuickBooks."
    });
    console.log("3rd box initialized");

    // Add the new box to the Model list, then regenerate the view with the new box added
    boxes.add(cta_box_3);
    boxCollectionView.removeAllViews();
    boxCollectionView.render();
    console.log("New box added and view re-rendered");

});