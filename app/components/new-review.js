import Ember from 'ember';

export default Ember.Component.extend({
  reviewFormShow: false,

  actions: {
    reviewFormShow() {
      this.set('reviewFormShow', true);
    },

    saveReview() {
      var params = {
        rating: this.get('rating'),
        name: this.get('name'),
        explanation: this.get('explanation'),
        book: this.get('book')
      };
      this.set('rating', undefined);
      this.set('name', undefined);
      this.set('explanation', undefined);
      this.set('reviewFormShow', false);
      this.sendAction('saveReview', params);
    }
  }
});
