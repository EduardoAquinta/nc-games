export default function CommentView({author, body}) {
    return (
        <article id="singleComment">
            <p>{author}</p>
            <p>{body}</p>
        </article>
    )
}