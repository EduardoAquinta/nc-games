export default function ReviewListing({title, designer, owner, review_img_url, category, created_at, votes, comment_count}) {
    return (
        <article id="reviewList">
            <ul className="card">
                <li><img src={review_img_url} alt="none found" id="listing"/></li>
                <li>{title}</li>
                <li id="clickme">Please Click to go to full review</li>
           </ul>
        </article>
    )
}