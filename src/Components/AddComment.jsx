//two input fields for name and comment
//saves comment under the review_id already in state
//validates correct inputs

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Utils/api";


const PostComment = () => {
    // const [comment, setComment] = useState([]);
    // const [isPosting, setIsPosting] = useState(true);
    // const [error, setError] = useState(null);
    const [newUsername, setNewUserName] = useState("")
    const [newBody, setNewBody] = useState("")
    
    const {review_id} = useParams();

       
    

    const commentToAdd = {
        username: newUsername,
        body: newBody,
        review_id: review_id
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(commentToAdd);
    }

       return (
        <section id="postComments">
            <p>Please post your comment here - </p>
            <form onSubmit={handleSubmit} id="commentForm">
                <label htmlFor="author">Author:</label>
                <input 
                type="text"
                name="author"
                value={newUsername}
                onChange={(event) => {
                    setNewUserName(event.target.value)
                }}></input>
                <label htmlFor="body">Your Comment:</label>
                <textarea 
                name="body"
                rows="4"
                cols="50"
                value={newBody}
                onChange={(event) => {
                    setNewBody(event.target.value)
                }}></textarea>
                <button type="submit">Post Comment</button>
            </form>

        </section>
    )
}

export default PostComment;