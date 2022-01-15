import React, { useState } from 'react';

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const Part = ({ name, value }) => {
  if (name === 'Positive')
    return (
      <tr>
        <td>{name}</td> <td>{value} %</td>
      </tr>
    );
  return (
    <tr>
      <td>{name}</td> <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  if (stats.all === 0) return <p>No Feedback Given</p>;
  return (
    <table>
      <tbody>
        <Part name="Good" value={stats.good} />
        <Part name="Neutral" value={stats.neutral} />
        <Part name="Bad" value={stats.bad} />
        <Part name="All" value={stats.all} />
        <Part name="Average" value={stats.average} />
        <Part name="Positive" value={stats.positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const stats = {
    good: good,
    bad: bad,
    neutral: neutral,
    all: all,
    average: (good * 1 + bad * -1) / all,
    positive: (good * 100) / all,
  };

  const incrementBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };
  const incrementGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button name="Good" onClick={incrementGood} /> &nbsp;
      <Button name="Neutral" onClick={incrementNeutral} /> &nbsp;
      <Button name="Bad" onClick={incrementBad} />
      <h1>Statistics</h1>
      <Statistics stats={stats} />
    </>
  );
};

export default App;
