require(["UserModel"], function(UserModel){
  
  // Instantiate a new User
  var tom = new UserModel();

  // Set some attributes
  tom.set({
    address: "600 College st, Apt 203",
    business_category: "Manufacturing"
  });

  // Make sure that attributes were set
  var address = tom.get('address');
  var category = tom.get('business_category');
  console.log("Address: " + address + ', Category: ' + category);

  // Print out all attributes of the model instance in Object and String form
  console.log(tom.toJSON());
  console.log(JSON.stringify(tom));
});