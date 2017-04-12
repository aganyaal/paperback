import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  name: DS.attr(),
  explanation: DS.attr(),
  book: DS.belongsTo('book', {async: true})
});
