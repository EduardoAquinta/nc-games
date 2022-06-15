import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { fetchReviewsByCategory} from '../Utils/api';
import { fetchReviewList } from '../Utils/api'
//import CategoryList from './ReviewCategories';

const ReviewsByCategory = () => {
    const [reviewsCat, setReviewsCat] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {category_name} = useParams(); 
    useEffect(() => {
        fetchReviewList(category_name)
        .then((data) => {
            console.log(data, "<---fetchReviews data")
            setReviewsCat(data);
            setIsLoading(false);
        })
    }, [category_name])

    if (isLoading) return<p>Loading Reviews...please wait...</p>
    return (
        <section id="reviewListCat">
            {reviewsCat.reviews.map((review) => {

                    return (
                        <article>
                        <p>{review.title}</p>
                        <p>{review.review_img_url}</p>
                        </article>
                )
            })}
        </section>
    )
}

export default ReviewsByCategory;