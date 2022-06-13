export default function ReviewListing({title, designer, owner, review_img_url, category, created_at, votes, comment_count}) {
    return (
        <article id="reviewList">
            <p>
                Title : {title}<br></br>
                Designer : {designer}<br></br>
                Owner: {owner}<br></br>
                Img: <img src={review_img_url} alt="none found" id="listing"/><br></br>
                Category: {category}<br></br>
                Created at: {created_at}<br></br>
                Votes: {votes}<br></br>
                Comment Count: {comment_count}<br></br> 
            </p>
        </article>
    )
}