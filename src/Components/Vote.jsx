import { useState } from "react"
import { patchVotes } from "../Utils/api"

const Votes = ({votes, review_id}) => {
    const [voteChange, setVoteChange] = useState(0)

    const handleClick = () => {
        setVoteChange((currentVote) => currentVote + 1);
        patchVotes(review_id, 1).catch(() => {
            setVoteChange((currentVote) => currentVote -1);
        });
    };
    const handleClick2 = () => {
        setVoteChange((currentVote) => currentVote - 1);
        patchVotes(review_id, -1).catch(() => {
            setVoteChange((currentVote) => currentVote + 1);
        });
    };
    
    console.log(voteChange, "<--- vote change")
    console.log(votes, "<--- Vote count ")
    console.log(review_id, "<--- review_id")
    
    return (
        <>
        <p>{votes + voteChange} Votes</p>
        <button onClick={handleClick} disabled={setVoteChange > 0}> Upvote</button>
        <button onClick={handleClick2} disabled={setVoteChange < 0}> Downvote</button>

        </>
    )
}

export default Votes;