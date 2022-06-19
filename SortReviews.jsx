import { useEffect } from 'react';
import { useState } from 'react';

const SortReviews = (reviews) => {

    const reviewList = reviews.reviews.reviews;
    const [data, setData] = useState([]);
    const [sort, setSort] = useState('reviewList');

    useEffect(() => {
    const sortArray = (type) => {
        const types = {
            date: 'date',
            comment_count: 'comment_count',
            votes: 'votes'
        };
        const sortProperty = types[type];
        console.log(sortProperty, "<--- sortProperty")
        const sorted = [...reviewList].sort((a,b) => b[sortProperty] - a[sortProperty]);
        console.log(sorted, "<--- sorted");
        setData(sorted);
    }

    sortArray(sort);
}, [data, sort, reviewList])
    
console.log(reviewList)
    return (
        <div className='sorter'>
            <select onChange={(event) => setSort(event.target.value)}>
                <option value="date">Date</option>
                <option value="votes">Votes</option>
                <option value="comment_counts">Comment Count</option>
            </select>
            {reviews}
        </div>
    )
}

export default SortReviews;