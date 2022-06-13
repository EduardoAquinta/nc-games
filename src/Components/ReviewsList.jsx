import { useEffect, useState } from 'react';
import ReviewListing from './ReviewListing'; 
import { fetchReviewList } from '../Utils/api';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchReviewList()
        .then((data) => {
            setReviews(data);
            setIsLoading(false);
        });
    }, []);


    if (isLoading) return <p>Loading Reviews... please wait...</p>
    return (
        <section id="reviewList">
            {reviews.reviews.map((review) => {
                return (
                    <ol type="1" key={review.review_id}>
                        <ReviewListing
                        key={review.review_id}
                        title={review.title}
                        designer={review.designer}
                        owner={review.owner}
                        review_img_url={review.review_img_url}
                        category={review.category}
                        created_at={review.created_at}
                        votes={review.votes}
                        comment_count={review.comment_count}
                        />
                    </ol>
                )
            })}
        </section>
    )
}

export default ReviewList;