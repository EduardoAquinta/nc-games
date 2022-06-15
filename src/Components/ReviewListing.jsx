export default function ReviewListing({title, designer, owner, review_img_url, category, created_at, votes, comment_count}) {
    return (
        <li id="reviewList">
        <article>
            <ul className="card">
                <img src={review_img_url} alt="none found" id="listing"/>
                <p>{title} {designer} {owner} {category} {created_at} {votes} {comment_count} </p>
            </ul>
        </article>
        </li>
    )
}