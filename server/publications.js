Meteor.publish('posts', function(author) {
  return Posts.find();
});

/*Meteor.publish('allPosts', function(){
  return Posts.find({}, {fields: {
    date: false
  }});
});*/