Languages = new Mongo.Collection("languages");
Degrees = new Mongo.Collection("degrees");
Experiences = new Mongo.Collection("experiences");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({

    languages: function () {
       return Languages.find({checked: {$ne: true}});},

    degrees: function () {
      return Degrees.find({checked: {$ne: true}});},

    experiences: function () {
      return Experiences.find({checked: {$ne: true}});},

  });


  
Template.body.events({
    "submit .addlang": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Get value from form element
      var text = event.target.text.value;
      var skill= event.target.skill.value;
      // Insert a task into the collection
            Languages.insert({

        text: text,

        skill: skill,

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
     "submit .new-degree": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Get value from form element
      var text = event.target.text.value;
      // Insert a task into the collection
            Degrees.insert({

        text: text,

        createdAt: new Date(),            // current time

        owner: Meteor.userId(),           // _id of logged in user

        /*username: Meteor.user().username*/  // username of logged in user

      });
      // Clear form
      event.target.text.value = "";

    },

     "submit .new-experience": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Get value from form element
      var text = event.target.text.value;
      // Insert a task into the collection
            Experiences.insert({

        text: text,

        createdAt: new Date(),            // current time

        owner: Meteor.userId(),           // _id of logged in user

        /*username: Meteor.user().username*/  // username of logged in user

      });
      // Clear form
      event.target.text.value = "";

    },

  });
  
Template.language.events({
  "click .addlang":function () {
    event.preventDefault();
      // Get value from form element
      var text = event.target.text.value;
      var skill= event.target.skill.value;
      // Insert a task into the collection
            Languages.insert({

        text: text,

        skill: skill,

        createdAt: new Date(),            // current time

        owner: Meteor.userId(),           // _id of logged in user

        /*username: Meteor.user().username*/  // username of logged in user

      });
      // Clear form
      event.target.text.value = "";

    },
  
  "click .delete": function () {
    Languages.remove(this._id);
  }
});

Template.degree.events({
  "click .delete": function () {
    Degrees.remove(this._id);
  }
});

Template.experience.events({
  "click .delete": function () {
    Experiences.remove(this._id);
  }
});
 


  Accounts.ui.config({

    passwordSignupFields: "EMAIL_ONLY"

  });
}
