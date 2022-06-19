export default function SingleReviewView({title, designer, owner, review_body, review_img_url, category, created_at,  comment_count}) {
    return (
        <>
        <div className="single-review-text" style={{background: review_img_url}}>
             <p> Title - {title} </p>
             <p> Designer - {designer} </p>
             <p> Owner - {owner}</p>
             <p> Category - {category}</p>
             <p>Created - {created_at}</p>
             <p>Description - {review_body}</p>
             <p>Comment Count - {comment_count === 0 ? "No comments to show": comment_count}</p>
            <img src={review_img_url} alt="none found" id="listing"></img>
        </div>
        </>
    )
}

