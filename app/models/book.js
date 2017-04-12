import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  last_name: DS.attr(),
  first_name: DS.attr(),
  summary: DS.attr(),
  image_url: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
