import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    addBook(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    },
  }
});
