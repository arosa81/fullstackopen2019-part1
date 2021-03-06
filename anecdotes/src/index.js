import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];
const initialVotesArray = anecdotes.map(() => 0);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const ButtonVote = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const MostVotedAnecdote = ({ getHighestVoteIndex }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getHighestVoteIndex]}</p>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votesArray, setVote] = useState(initialVotesArray);

  const handleRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVote = (selected) => () => setVote(votesArray.map((voteItem, index) => (index === selected) ? voteItem += 1 : voteItem));
  const getHighestVoteIndex = votesArray.indexOf(Math.max(...votesArray));

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]} <br />
      <p>has {votesArray[selected] || 0} votes </p>
      <ButtonVote onClick={handleVote(selected)} text="vote" />
      <Button onClick={handleRandomAnecdote} text="next anecdote" />
      <MostVotedAnecdote getHighestVoteIndex={getHighestVoteIndex} />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
