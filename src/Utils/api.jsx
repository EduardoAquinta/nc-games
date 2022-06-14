import axios from 'axios';

const gamesDB = axios.create({
    baseURL: 'https://edenv1.herokuapp.com/api'
});

export const fetchReviewList = () => {
    return gamesDB.get(`/reviews`)
    .then((response) => {
        return response.data
    });
};