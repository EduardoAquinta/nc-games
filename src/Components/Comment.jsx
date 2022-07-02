import DeleteComment from './DeleteComment.jsx';

const Comment = ({comment}) => {

    const time = new Date(`${comment.created_at}`).toLocaleString('en', {timeZoneName: 'short'})
    

    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="no content"></img>
            </div>
            <div className="comment-content">
                <div className="comment-author">{comment.author}</div>
                <div>{time}</div>

            </div>
            <div className="comment-text">{comment.body}</div>
            <DeleteComment comment_id={comment.comment_id}/>
        </div>
    );
};

export default Comment;