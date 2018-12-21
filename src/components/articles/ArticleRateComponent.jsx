import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const ArticleRateComponent = ({ rating, onStarClick }) => (
  <div>
    <center>
      <StarRatingComponent name="rate1" starCount={5} value={rating} onStarClick={onStarClick} />
    </center>
  </div>
);
