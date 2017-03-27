FlowRouter.route('/', {
  name: 'Lists.show',
  action() {
    BlazeLayout.render('app',{ main:'app'});
  }
});
