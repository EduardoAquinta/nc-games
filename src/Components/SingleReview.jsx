import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReview } from '../Utils/api';
import SingleReviewView from './SingleReviewView';
import Votes from './Vote';


const SingleReview = () => {
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();


    const {review_id} = useParams();

    useEffect(() => {
        fetchReview(review_id)
        .then((data) => {
            setReview(data.review);
            setIsLoading(false);
        })
    }, [review_id])


    if (isLoading) return<p>Loading Review... please wait...</p>
    return (

        <section id="singleReview">
                <button onClick={() => navigate("/reviews")}>Back to Main Page</button>

                  <SingleReviewView
                        key={review.review_id}
                        title={review.title}
                        designer={review.designer}
                        owner={review.owner}
                        review_body={review.review_body}
                        review_img_url={review.review_img_url}
                        category={review.category}
                        created_at={review.created_at}
                        votes={review.votes}
                        comment_count={review.comment_count}
                        />
                        <Votes votes={review.vote} review_id={review.review_id} />
        </section>
    )
}

export default SingleReview;