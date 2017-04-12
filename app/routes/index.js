import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book').then(function(books) {
      return books.sortBy('last_name');
    });
  },
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
  }
});
