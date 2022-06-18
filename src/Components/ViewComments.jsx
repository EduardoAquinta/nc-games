import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../Utils/api';
import CommentView from './CommentView';
import PostComment from './PostComment';




const ViewComments = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] =useState(true);
    const [error, setError] = useState(null);


    const {review_id} = useParams();

    useEffect(() => {
        fetchComments(review_id)
        .then((data)=> {
            setComments(data.comment);
            setIsLoading(false);            
        })
        .catch((error) => {
            setError(error)

        })
    }, [review_id])

    if (isLoading) return <p>Loading comments... please wait...</p>
    if(error) return<p>There has been an Error!</p> 


    return (
        <>
        <section id="commentsView" key={comments.comment_id}
        >
            <p>All your gossipy comments for us to fawn over for dopamine hits!</p>            
            {comments.map((comment) => {
                return (
                    <>
                        <article id="commentCard" key={comment.comment_id}>
                            <CommentView
                            comment_id={comment.comment_id}
                            author={comment.author}
                             body={comment.body}/>
                        </article>
                    </>
                )
            })}
        </section>
        <div>             <PostComment value={comments}/>
        </div>
        </>
    )
}

export default ViewComments;