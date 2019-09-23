import React, { useState } from 'react';

const HeadingPage = () => <div><h1>Give Feedback</h1></div>
const HeadingStats = () => <div><h1>Statistics</h1></div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setVal = (value) => (props) => {
    (props.target.innerText === 'Good') && setGood(value);
    (props.target.innerText === 'Neutral') && setNeutral(value);
    (props.target.innerText === 'Bad') && setBad(value);
  }
  return (
    <div>
      <HeadingPage />
      <Button onClick={setVal(good + 1)} text='Good'></Button>
      <Button onClick={setVal(neutral + 1)} text='Neutral'></Button>
      <Button onClick={setVal(bad + 1)} text='Bad'></Button>
      <HeadingStats />
      <Display
        good={good}
        neutral={neutral}
        bad={bad} />
    </div>
  )
}
export default App;
