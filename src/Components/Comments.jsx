import { useEffect } from "react";
import { useState } from "react";
import { fetchComments, postComment } from "../Utils/api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({review_id}) => {

    const [backendComments, setBackendComments] = useState([])

    const addComment = (body, username, review_id) => {
        console.log( body, username, review_id, '<--- addComment')
        postComment(body, username, review_id)
        .then(({comment}) => {
            console.log(comment, "<--- postAddcomment")
            setBackendComments([comment, ...backendComments]);
        });
    };


     useEffect(() => {
        fetchComments(review_id)
        .then((data) => {
            setBackendComments(data.comment)
            console.log(data.comment, "<--- postfetchAPI data")
        });
    }, [review_id]);

    console.log(backendComments, "<--- backendComments")
    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write Comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} review_id={review_id}/>
            <div className="comments-container">
                {backendComments.map(singleComment => (
                    <Comment key={singleComment.comment_id} comment={singleComment} />
                ))}
            </div>
        </div>
    );
};

export default Comments;