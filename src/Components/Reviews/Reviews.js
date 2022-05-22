import React from 'react';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="feedback">
      <h1 className='text-center'>What my customers say about us!</h1>
      {reviews.map(user_review => <Review key={user_review._id} user_review={user_review}></Review>)}
    </div>
  );
};

export default Reviews;