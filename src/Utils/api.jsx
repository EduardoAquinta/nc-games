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
        console.log(response, "<---postfetch")
        return response.data
    });
};

export const fetchReview = (review_id) => {
    return gamesDB.get(`/reviews/${review_id}`,)
    .then((response) => {
        return response.data
    });
};

export const patchVotes = (review_id, inc_votes) => {
    return gamesDB.patch(`/reviews/${review_id}`, {inc_votes})
    .then((response) => {
        return response.data
    });
};

export const fetchComments = (review_id) => {
    return gamesDB.get(`/reviews/${review_id}/comments`)
    .then((response) => {
        return response.data
    });
};

<<<<<<< HEAD
export const postComment = ({username, body, review_id}) => {
    console.log( body, username, review_id, "<--- prePost");
    return gamesDB.post(`/reviews/${review_id}/comments`, { username, body})
    .then((response) => {
        console.log(response, "<--- postFetch")
        return response.data
    })
    .catch((error)=> {
        console.dir(error);
    })
} 


=======
export const postComment = ({review_id, author, body}) => {
    return gamesDB.post(`/reviews/${review_id}`, {author, body})
    .then((response) => {
        console.log(response.data)
        return response.data
    });
};
>>>>>>> main
