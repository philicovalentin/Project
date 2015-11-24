Languages = new Mongo.Collection("languages");
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({

    languages: function () {

      /*if (Session.get("hideCompleted")) {

        // If hide completed is checked, filter tasks*/

       return Languages.find({checked: {$ne: true}});

      /*} else {

        // Otherwise, return all of the tasks

        return Tasks.find({},/*{sort: {createdAt: -1}});*/

      /*}*/

    },

    /*hideCompleted: function () {

      return Session.get("hideCompleted");
    },

    incompleteCount: function () {

      return Tasks.find({checked: {$ne: true}}).count();

    }*/

  });

  
Template.body.events({
    "submit .new-language": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Get value from form element
      var text = event.target.text.value;
      // Insert a task into the collection
            Languages.insert({

        text: text,

        createdAt: new Date(),            // current time

        owner: Meteor.userId(),           // _id of logged in user

        /*username: Meteor.user().username*/  // username of logged in user

      });
      // Clear form
      event.target.text.value = "";

    },

    /*"change .hide-completed input": function (event) {

      Session.set("hideCompleted", event.target.checked);

    }*/

  });
  
Template.language.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Languages.update(this._id, {
      $set: {checked: ! this.checked}
    });
  },
  "click .delete": function () {
    Languages.remove(this._id);
  }
});
 

  Accounts.ui.config({

    passwordSignupFields: "EMAIL_ONLY"

  });
}