const Comment = ({comment}) => {

    //console.log(comment, "<--- comment")

    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="../user.jpg" alt="no content"></img>
            </div>
            <div className="comment-content">
                <div className="comment-author">{comment.author}</div>
                <div>{comment.created_at}</div>

            </div>
            <div className="comment-text">{comment.body}</div>
        </div>
    );
};

export default Comment;