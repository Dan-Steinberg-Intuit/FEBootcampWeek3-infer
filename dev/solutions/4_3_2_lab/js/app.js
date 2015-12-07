require(["trialModel", "trialView"], function(TrialModel, TrialView){
  
  // Instantiate a new Trial Model
  var trialModel = new TrialModel({
    warning_img: 'warning.png', 
    img_alt: 'trial warning image', 
    trial_days_left: 28, 
    subscribe_link: 'infer.com/subscribe'
  });

  var trialView = new TrialView({model: trialModel});

  trialView.render();

});