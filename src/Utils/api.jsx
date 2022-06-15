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

// export const fetchReviewsByCategory = (slug) => {
//     console.log(slug)
//     return gamesDB.get(`/reviews/${slug}`)
//     .then((response) => {
//         console.log(response)
//         return response.data
//     })
// }