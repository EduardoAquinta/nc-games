import axios from 'axios';

const gamesDB = axios.create({
    baseURL: 'https://edenv1.herokuapp.com/api'
});

export const fetchReviewList = (slug, comment_count) => {
    const params = {category:slug, sortby: comment_count}
    return gamesDB.get(`/reviews`, {params})
    .then((response) => {
        return response.data
    });
};

export const fetchCategoryList = () => {
    return gamesDB.get(`/categories`)
    .then((response) => {
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

export const postComment = ({username, body, review_id}) => {
    console.log({username, body, review_id}, "<--- before api")
    return gamesDB.post(`/reviews/${review_id}/comments`,  {username, body})
    .then((response) => {
        console.log(response.data, "<--- afterApi")
        return response.data
    })
    .catch((error)=> {
        console.dir(error);
    });
} ;

export const deleteCommentFromApi = (comment_id) => {
    return gamesDB.delete(`/comments/${comment_id}`, { comment_id})
    .then((empty) => {
        return {empty};
    });
};

export const fetchUserList = () => {
    return gamesDB.get(`/users`)
    .then((response) => {
        return response.data
    });
};


