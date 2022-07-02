import { useState } from "react";
import { deleteCommentFromApi } from "../Utils/api";

const DeleteComment = ({comment_id}) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        deleteCommentFromApi(comment_id)
        .then(() => {
            setIsDeleting(true);
        })
    };

if (isDeleting)return<p>Deleting...</p>

return (
    <section>
        <button className="delete-button" onClick={handleClick}>Delete</button>
    </section>
)

}
export default DeleteComment;