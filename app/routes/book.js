import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      book: this.store.findRecord('book', params.book_id),
    });
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    saveReview(params) {
      var route = this;
      var newReview = this.store.createRecord('review', params);
      var book = params.book;
      book.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return book.save().then(function() {
          route.refresh();
        });
      });
    }
  }
});
