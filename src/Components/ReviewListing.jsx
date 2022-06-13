export default function ReviewListing({title, designer, owner, review_img_url, category, created_at, votes, comment_count}) {
    return (
        <article id="reviewList">
            <ul className="card">
                <li><img src={review_img_url} alt="none found" id="listing"/></li>
                <li>Title : {title}</li>
                <li>Designer : {designer}</li>
                <li>Category: {category}</li>
                <li>Votes: {votes}</li>
            </ul>
        </article>
    )
}