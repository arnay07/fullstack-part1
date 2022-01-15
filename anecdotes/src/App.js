import React, { useState } from 'react';

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const MvpAnecdote = ({ anecdotes, votes }) => {
  const max = votes.reduce((a, b) => Math.max(a, b));
  if (max === 0) return <></>;
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(max)]}</p>
      <p>has {max} votes</p>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const randomAnecdote = () => {
    let randomValue = Math.floor(Math.random() * anecdotes.length);
    while (randomValue === selected) {
      randomValue = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomValue);
  };

  const incrementVote = () => {
    let votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes([...votesCopy]);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <br />
      <Button text="Next anecdote" onClick={randomAnecdote} />
      &nbsp;
      <Button text="Vote" onClick={incrementVote} />
      <MvpAnecdote anecdotes={anecdotes} votes={votes} />
    </>
  );
};

export default App;
