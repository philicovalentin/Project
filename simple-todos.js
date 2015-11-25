
Personalinfo = new Mongo.Collection("personalinfo");
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

Template.addPersonalInfo.events({
  'submit form': function(event){
    console.log("Form submitted");
    console.log(event.type);
    event.preventDefault();
    var finame=event.target.text.value;
    var faname=event.target.text.value;
    var street=event.target.text.value;
    var zip=event.target.text.value;
    var city=event.target.text.value;
    var nationality=event.target.text.value;
    /*var Source tax=event.target.text.value*/
    var dnumber=event.target.text.value;
    var mnumber=event.target.text.value;
    var birth=event.target.date.value;
    var ahv=event.target.text.value;
    var sdate=event.target.date.value;
    var mdate=event.target.date.value;
    var sfaname=event.target.text.value;
    var sfiname=event.target.text.value;
    var ch1name=event.target.text.value;
    var ch1bdate=event.target.date.value;
    var ch2name=event.target.text.value;
    var ch2bdate=event.target.date.value;
    var ch3name=event.target.text.value;
    var ch3bdate=event.target.date.value;
    var em1name=event.target.text.value;
    var relation1=event.target.text.value;
    var phone1=event.target.text.value;
    var em2name=event.target.text.value;
    var relation2=event.target.text.value;
    var phone2=event.target.text.value;
    var bankname=event.target.text.value;
    var bankplace=event.target.text.value;
    var bankzip=event.target.text.value;
    var iban=event.target.text.value;
    var accnbr=event.target.text.value;
    var accname=event.target.text.value;
    var eurbankname=event.target.text.value;
    var eurbankplace=event.target.text.value;
    var eurbankzip=event.target.text.value;
    var euriban=event.target.text.value;
    var euraccnbr=event.target.text.value;
    var euraccname=event.target.text.value;
    
    Personalinfo.insert({
     faname: fname,
     street: street,
     zip: zip,
     city: city,
     nationality: nationality,
    /* Source tax=event.target.text.value*/
     dnumber: dnumber,
     mnumber: mnumber,
     birth: birth,
     ahv: ahv,
     sdate: sdate,
     mdate: mdate,
     sfaname: sfaname,
     sfiname: sfiname,
     ch1name: ch1name,
     ch1bdate: ch1bdate,
     ch2name: ch2name,
     ch2bdate: ch2bdate,
     ch3name: ch3name,
     ch3bdate: ch3bdate,
     em1name: em1name,
     relation1: relation1,
     phone1: phone1,
     em2name: em2name,
     relation2: relation2,
     phone2: phone2,
     bankname: bankname,
     bankplace: bankplace,
     bankzip: bankzip,
     iban: iban,
     accnbr: accnbr,
     accname: accname,
     eurbankname: eurbankname,
     eurbankplace: eurbankplace,
     eurbankzip: eurbankzip,
     euriban: euriban,
     euraccnbr: euraccnbr,
     euraccname: euraccname,
     createdAt: new Date(),
     owner: Meteor.userId(),
     /*username: Meteor.user().username*/  // username of logged in user
    });
    event.target.text.value= "";
  },
})
  
Template.body.events({
    "submit .new-language": function (event) {
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
