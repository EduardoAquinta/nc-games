const Comment = ({comment}) => {

    const time = new Date(`${comment.created_at}`).toLocaleString('en', {timeZoneName: 'short'})
    
    //console.log(comment, "<--- comment")

    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="../user.jpg" alt="no content"></img>
            </div>
            <div className="comment-content">
                <div className="comment-author">{comment.author}</div>
                <div>{time}</div>

            </div>
            <div className="comment-text">{comment.body}</div>
        </div>
    );
};

export default Comment;