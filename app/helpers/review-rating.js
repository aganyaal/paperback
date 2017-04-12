import Ember from 'ember';

export function reviewRating(params) {

  var bookRating = parseInt(params[0]);
  var filledStar = "&#9733;";
  var emptyStar = "&#9734;";

  if (bookRating === 1) {
    return Ember.String.htmlSafe(filledStar + emptyStar + emptyStar + emptyStar + emptyStar);
  } else if (bookRating === 2) {
    return Ember.String.htmlSafe(filledStar + filledStar + emptyStar + emptyStar + emptyStar);
  } else if (bookRating === 3) {
    return Ember.String.htmlSafe(filledStar + filledStar + filledStar + emptyStar + emptyStar);
  } else if (bookRating === 4) {
    return Ember.String.htmlSafe(filledStar + filledStar + filledStar + filledStar + emptyStar);
  } else if (bookRating === 5) {
    return Ember.String.htmlSafe(filledStar + filledStar + filledStar + filledStar + filledStar);
  }

}


export default Ember.Helper.helper(reviewRating);
