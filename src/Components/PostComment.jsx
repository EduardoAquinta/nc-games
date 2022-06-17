//two input fields for name and comment
//saves comment under the review_id already in state
//validates correct inputs

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Utils/api";


const PostComment = () => {

    const [newUsername, setNewUserName] = useState("");
    const [newBody, setNewBody] = useState(""); 

    
    const {review_id} = useParams();

       
    const commentToAdd = {
        username: newUsername,
        body: newBody,
        review_id: review_id
    }

    const isEmpty = commentToAdd.username.length === 0 || commentToAdd.body.length === 0;
    const nonUser = !commentToAdd.username === "jessjelly" || !commentToAdd.username === "coojmessy" || !commentToAdd.username === "weegembump" || !commentToAdd.username === "tickle22" || commentToAdd.username === "grumpy19" || commentToAdd.username === "happyamy2016"

    useEffect(() => {
        
    })
  
    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(commentToAdd);
        setNewUserName("");
        setNewBody("");
    }

    const handleClick = (data) => {
        console.log(data.target)
        // setNewUserName("");
        // setNewBody("");
    }



       return (
        <section id="postComments">
            <p>Please post your comment here - </p>
            <form onSubmit={handleSubmit} id="commentForm" disabled="nonUser">
                <label htmlFor="author">Author:</label>
                <input 
                type="text"
                name="author"
                placeholder="username..."
                disabled={nonUser}
                value={newUsername}
                onChange={(event) => {
                    setNewUserName(event.target.value)
                }}></input>
                <label htmlFor="body"></label>
                <textarea 
                name="body"
                rows="4"
                cols="50"
                placeholder="Write your comment here..."
                value={newBody}
                onChange={(event) => {
                    setNewBody(event.target.value)
                }}></textarea>
                <button type="submit" onClick={handleClick} disabled={isEmpty}>Post Comment</button>
            </form>

        </section>
    )
}

export default PostComment;