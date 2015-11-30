Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

Router.route('/profile', {template: 'profile'});

Router.route('/cv', {template: 'cv'});

Router.route('/timesheet', {template: 'timeSheet'});
