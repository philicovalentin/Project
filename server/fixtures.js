if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Personal data',
    url: "/profile"
  });

  Posts.insert({
    title: 'CV',
    url: "/cv"
  });

  Posts.insert({
    title: 'Time sheet',
    url: '/timesheet'
  });
}