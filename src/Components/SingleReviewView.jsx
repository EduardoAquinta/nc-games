export default function SingleReviewView({title, designer, owner, review_body, review_img_url, category, created_at,  comment_count}) {
    return (
        <>
        <div className="single-review-text" style={{background: review_img_url}}>
             <h2> {title} </h2>
             <p> <strong>Designer- </strong>{designer} </p>
             <p> <strong>Owner- </strong>{owner}</p>
             <p> <strong>Category- </strong>{category}</p>
             <p><strong>Created- </strong>{created_at}</p>
             <p><strong>Description- </strong>{review_body}</p>
             <p><strong>Comment Count- </strong>{comment_count === 0 ? "No comments to show": comment_count}</p>
            <img src={review_img_url} alt="none found" id="listing"></img>
        </div>
        </>
    )
}

