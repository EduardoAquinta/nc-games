import { useState } from "react"
import { patchVotes } from "../Utils/api"

const Votes = ({votes, review_id}) => {
    const [voteChange, setVoteChange] = useState(0)
    const [error, setError] = useState(null);

    const handleClick = () => {
        setVoteChange((currentVote) => currentVote + 1);
        patchVotes(review_id, 1)
        .catch((error) => {
            setError({error})
            setVoteChange((currentVote) => currentVote -1);
        });
    };
    const handleClick2 = () => {
        setVoteChange((currentVote) => currentVote - 1);
        patchVotes(review_id, -1).catch((error) => {
            setError(error)
            setVoteChange((currentVote) => currentVote + 1);
        });
    };
    
    if(error) return<p>There has been an Error!</p> 
    return (
        <>
        <p>Votes - {votes + voteChange} </p>
        <button className="voteButton" onClick={handleClick} disabled={voteChange > 0}> Upvote</button>
        <button className="voteButton" onClick={handleClick2} disabled={voteChange < 0}> Downvote</button>

        </>
    )
}

export default Votes;