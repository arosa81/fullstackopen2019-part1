import React, { useState } from 'react';

const HeadingPage = () => <div><h1>Give Feedback</h1></div>
const HeadingStats = () => <div><h1>Statistics</h1></div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({ good, neutral, bad, all, average, percentPositive }) => {
  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {percentPositive} %</p>
    </div>
  )
}

const Statistics = ({ good, neutral, bad, all, average, percentPositive }) => {
  return (
    <div>
      <HeadingStats />
      {(all === 0) ? (
        <p>No feedback given</p>
      ) : (
          <Display
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            percentPositive={percentPositive}
          />
        )}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const percentPositive = (good / all) * 100;


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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        percentPositive={percentPositive}
      />
    </div>
  )
}
export default App;
