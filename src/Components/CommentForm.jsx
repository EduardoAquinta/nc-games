import { useState } from "react";

const CommentForm = ({handleSubmit, submitLabel}) => {
    const[text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text)
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea className="comment-form-textarea"
            value={text}
            onChange={(event) => setText(event.target.value)}/>
            <button className="comment-form-button">{submitLabel}</button>
        </form>
    );
};

export default CommentForm;