export default function SingleReviewView({title, designer, owner, review_body, review_img_url, category, created_at,  comment_count}) {
    return (
        <article id="singleReview">
             <p> Title - {title} </p>
             <p> Designer - {designer} </p>
             <p> Owner - {owner}</p>
             <p>Description - {review_body}</p>
             <p> Category - {category}</p>
             <p>Created - {created_at}</p>
             <p>Comment Count - {comment_count}</p> 
            <img src={review_img_url} alt="none found" id="listing"></img>                
        </article>
    )
}