import axios from 'axios';

const gamesDB = axios.create({
    baseURL: 'https://edenv1.herokuapp.com/api'
});

export const fetchReviewList = (slug) => {
    return gamesDB.get(`/reviews`, {params: {category: slug}})
    .then((response) => {
        return response.data
    });
};

export const fetchCategoryList = () => {
    return gamesDB.get(`/categories`)
    .then((response) => {
        return response.data
    })
}

export const fetchReview = (review_id) => {
    console.log(review_id)
    return gamesDB.get(`/reviews/`, {params: {review_id: review_id}})
    .then((response) => {
        return response.data
    })
}




