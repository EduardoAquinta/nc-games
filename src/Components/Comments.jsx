import { useEffect } from "react";
import { useState } from "react";
import { fetchComments } from "../Utils/api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({review_id}) => {

    const [backendComments, setBackendComments] = useState([])


     useEffect(() => {
        fetchComments(review_id)
        .then((data) => {
            setBackendComments(data.comment)
        });
    }, [review_id]);

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write Comment</div>
            <CommentForm submitLabel="Write" handleSubmit="addComment"/>
            <div className="comments-container">
                {backendComments.map(singleComment => (
                    <Comment key={singleComment.comment_id} comment={singleComment}/>
                ))}
            </div>
        </div>
    );
};

export default Comments;