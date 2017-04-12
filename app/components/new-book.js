import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addBook() {
      var params = {
        title: this.get('title'),
        last_name: this.get('last_name'),
        first_name: this.get('first_name'),
        summary: this.get('summary'),
        image_url: this.get('image_url')
      };
      this.sendAction('addBook', params);
    }
  }
});
