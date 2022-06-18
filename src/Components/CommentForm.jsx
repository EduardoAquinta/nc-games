import { useState } from "react";

const CommentForm = ({handleSubmit, submitLabel, review_id}) => {
    const[body, setBody] = useState("")
    const[username, setUsername] =useState("")

    const addComment={
        username:username,
        body:body,
        review_id:review_id
    }

    const isEmpty = username.length === 0 || body.length === 0;


    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(addComment);
        setBody("");
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="author">Author</label>
                <input className="comment-form-author" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <textarea 
                className="comment-form-textarea"
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