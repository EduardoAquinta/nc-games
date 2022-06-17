import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchReviewList } from '../Utils/api'
//import CategoryList from './ReviewCategories';

const ReviewsByCategory = () => {
    const [reviewsCat, setReviewsCat] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {category_name} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchReviewList(category_name)
        .then((data) => {
            setReviewsCat(data);
            setIsLoading(false);
        })
    }, [category_name])

    if (isLoading) return<p>Loading Reviews...please wait...</p>
    return (
        <>
        <button onClick={() => navigate(-1)}>Back to main page</button>
        <section id="reviewListCat" >
            {reviewsCat.reviews.map((review) => {

                    return (
                          
                        <article key={review.review_id}>
                        <p>{review.title}</p>
                        <p>{review.review_id}</p>
                        <Link to={`/reviews/${review.review_id}`}>
                        <img src={review.review_img_url} alt="board game"></img>
                        </Link>
                        </article>
                        
                )
            })}
        </section>
        </>
    )
}

export default ReviewsByCategory;