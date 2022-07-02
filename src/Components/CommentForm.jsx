import { useState } from "react";

const CommentForm = ({handleSubmit, submitLabel, review_id}) => {
    const[body, setBody] = useState("")
    const[username, setUsername] =useState("")

let user = "jessjelly"

    const addComment={
        username:user,
        body:body,
        review_id:review_id
    }

    const isEmpty = body.length === 0;


    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(addComment);
        setBody("");
    }

    return (
        <form onSubmit={onSubmit}>
                <textarea 
                className="comment-form-textarea"
                rows="4"
                cols="50"
                placeholder="Please write your comment here..."
                value={body}
                onChange={(event) => setBody(event.target.value)}/>
                <button 
                className="comment-form-button" 
                disabled={isEmpty}>
                    {submitLabel}
                </button>    
        </form>
    );
};

export default CommentForm;