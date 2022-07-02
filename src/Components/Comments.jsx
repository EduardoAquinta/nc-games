import { useEffect } from "react";
import { useState } from "react";
import { fetchComments, postComment } from "../Utils/api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({review_id}) => {

    const [backendComments, setBackendComments] = useState([])


    const addComment = (body, username, review_id) => {
        postComment(body, username, review_id)
        .then(({comment}) => {
            setBackendComments([comment, ...backendComments]);
        });
    };


     useEffect(() => {
        fetchComments(review_id)
        .then((data) => {
            setBackendComments(data.comment)
        });
    }, [review_id]);

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <CommentForm submitLabel="Comment" handleSubmit={addComment} review_id={review_id}/>
            <div className="comments-container">
                {backendComments.map(singleComment => (
                    <Comment key={singleComment.comment_id} comment={singleComment} />
                ))}
            </div>
        </div>
    );
};

export default Comments;