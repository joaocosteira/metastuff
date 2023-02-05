import { Navigate } from "react-router-dom";

const Anecdote = ({ anecdote,vote }) => {

    console.log(anecdote);

    if(!anecdote){
        return <Navigate replace to="/" />
    }
    return(
        <>
            <h2>{anecdote.content}, by {anecdote.author}</h2>
            <p>
                It has {anecdote.votes} votes
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </p>
            {
                anecdote.info  &&
                <p>for more info see <a target="_blank" href={anecdote.info} rel="noreferrer">{anecdote.info}</a></p>
            }
        </>
    )
}

export default Anecdote;