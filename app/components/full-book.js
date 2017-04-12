import Ember from 'ember';

export default Ember.Component.extend({
  readingList: Ember.inject.service(),

  sortProperties: ['rating:desc'],
  sortedReviews: Ember.computed.sort('book.reviews', 'sortProperties'),

  author: Ember.computed('author', function() {
    return this.get('book.first_name') + " " + this.get('book.last_name');
  }),

  actions: {
    add(item) {
      this.get('readingList').add(item);
    },

    saveReview(review, params) {
      this.sendAction('saveReview', review, params);
    },
  }
});
