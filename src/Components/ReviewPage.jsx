import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../Utils/api';

import ReviewListing from './ReviewListing';

const SingleReview = () => {
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const mystery = useParams();
    console.log(mystery, "<---Mystery")

    useEffect(() => {
        fetchReview(mystery)
        .then((data) => {
            console.log(data, "fetched single review data ")
            setReview(data);
            setIsLoading(false);
        })
    }, [mystery])

    if (isLoading) return<p>Loading Review... please wait...</p>
    return (
        <section id="singleReview">
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
        </section>
    )
}

export default SingleReview;