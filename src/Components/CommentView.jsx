export default function CommentView({author, body, comment_id}) {
    return (
        <article id="singleComment" key={comment_id}>
            <p><strong>{author}</strong></p>
            <p>{body}</p>
        </article>
    )
}