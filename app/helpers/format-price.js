import Ember from 'ember';

export function formatPrice(params) {
  return "$" + (params/100).toFixed(2);
}

export default Ember.Helper.helper(formatPrice);
