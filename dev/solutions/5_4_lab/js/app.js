require(["models/trialModel", "views/trialView", "models/boxModel", "collections/boxCollection", 
         "views/boxView", "views/boxCollectionView"], function(TrialModel, TrialView, BoxModel, 
          BoxCollection, BoxView, BoxCollectionView){
  
  // Instantiate a new Trial Model
  var trialModel = new TrialModel({
    warning_img: 'warning.png', 
    img_alt: 'trial warning image', 
    trial_days_left: 28, 
    subscribe_link: 'infer.com/subscribe'
  });

  var trialView = new TrialView({model: trialModel});

  trialView.render();

  // 
  // Lab 5_4_1
  // *********

  Backbone.subViews = [];

  // Instatiate our 3 Box models
  var cta_box_1 = new BoxModel({
    img_src: 'cta-box-1.jpg', 
    img_alt: 'helpful man', 
    cta_title: 'Get set up by a pro', 
    cta_caption: 'Let your accountant access your books and help you get set up.'
  });
  
  var cta_box_2 = new BoxModel({
    img_src: 'cta-box-2.jpg', 
    img_alt: 'helpful man', 
    cta_title: 'Go Mobile', 
    cta_caption: 'Snap photos of receipts, create invoices, and more.'
  });

  var cta_box_3 = new BoxModel({
    img_src: 'cta-box-3.jpg', 
    img_alt: 'helpful man', 
    cta_title: 'Pay Employees', 
    cta_caption: 'Let experts handle payroll and taxes for you, all within QuickBooks.'
  });
  

  // Instantiate a new collection
  var boxCollection = new BoxCollection([cta_box_1, cta_box_2]);

  // Instantiate a new collection view
  var boxCollectionView = new BoxCollectionView({collection: boxCollection});

  // Render
  boxCollectionView.render();

  // Extra
  boxCollection.add(cta_box_3);

  boxCollectionView.removeAllViews();

  boxCollectionView.render();

});