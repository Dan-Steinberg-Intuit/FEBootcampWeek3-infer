define([], function(){

  // Define a User Model with defaults and an initializer
  var UserModel = Backbone.Model.extend({
    defaults: {
      account_type: "trial",
      sign_up_date: new Date().toJSON().slice(0,10)
    },
    initialize: function(){
      console.log("Attributes: " + JSON.stringify(this.attributes));
    }
  });
  return UserModel;
});