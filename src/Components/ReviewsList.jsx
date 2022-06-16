import { useEffect, useState } from 'react';
import ReviewListing from './ReviewListing'; 
import { fetchReviewList } from '../Utils/api';
import CategoryList from './ReviewCategories';

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
            <CategoryList />
               <p id="clickimage">Please click image to load full review</p>
                {/* {reviews.reviews.map((review) => {
                    return (
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
                    )
                })}; */}
        </section>
    )
}

export default ReviewList;