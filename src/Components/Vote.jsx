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
            console.dir(error)
            setVoteChange((currentVote) => currentVote + 1);
        });
    };
    
      
    
    if(error) return<p>There has been an Error!</p> 
    return (
        <>
        <p>Votes - {votes + voteChange} </p>
        <button className="voteButton1" onClick={handleClick} disabled={setVoteChange > 0}> Upvote</button>
        <button className="voteButton2" onClick={handleClick2} disabled={setVoteChange < 0}> Downvote</button>

        </>
    )
}

export default Votes;