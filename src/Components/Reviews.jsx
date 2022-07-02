import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchReviewList } from '../Utils/api'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {category_name} = useParams(); 
    const dave = 'comment_count';
    
    //const navigate = useNavigate();

    useEffect(() => {
        fetchReviewList(category_name, dave)
        .then((data) => {
            setReviews(data);
            setIsLoading(false);
        })
    }, [category_name, dave])



    if (isLoading) return<p>Loading Reviews...please wait...</p>
    return (
        <div id="container">
         {/* <SortReviews reviews={reviews}/> * */}
        <section  >
            {reviews.reviews.map((review) => {
                    return (                          
                        <div key={review.review_id} className="card">
                        <p>{review.title}</p>
                        <Link to={`/reviews/${review.review_id}`}>
                        <img src={review.review_img_url} alt="board game"></img>
                        </Link>
                        </div>                        
                )
            })}
        </section>
        </div>
    )
}

export default Reviews;