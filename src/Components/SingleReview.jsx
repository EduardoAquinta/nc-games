import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../Utils/api';
import SingleReviewView from './SingleReviewView';
import Votes from './Vote';
import Comments from './Comments';


const SingleReview = () => {
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
 



    const {review_id} = useParams();

    useEffect(() => {
        fetchReview(review_id)
        .then((data) => {
            setReview(data.review);
            setIsLoading(false);
        })
        .catch((error) => {
            console.dir(error);
        })
    }, [review_id])

    if (isLoading) return<p>Loading Review... please wait...</p>
    return (

        <section >
            <div className="whole-review">
                <SingleReviewView
                    key={review.review_id}
                    title={review.title}
                    designer={review.designer}
                    owner={review.owner}
                    review_body={review.review_body}
                     review_img_url={review.review_img_url}
                     category={review.category}
                     created_at={review.created_at}></SingleReviewView>
                 <Votes votes={review.votes} review_id={review.review_id} />
            </div>
            <div>
                <Comments review_id={(review_id)}/>
            </div>
       </section>
    )
}

export default SingleReview;