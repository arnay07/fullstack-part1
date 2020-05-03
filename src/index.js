import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => (
  <>
    <p>
      Hello {props.name}, you are {props.age} years old.
    </p>
  </>
)

const App = () => {
  const age = 24
  return (
    <>
      <p>Greetings</p>
      <Hello name="Arnaud" age={26}/>
      <Hello name="Benjamin" age={age}/>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
