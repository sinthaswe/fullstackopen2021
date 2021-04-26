import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  console.log('Hello from component')
  const name = 'Peter'
  const age = 10
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Swe" age={26+10}/>
    <Hello name="John" age={age}/>
    <Hello name={name}/>
  </div>
  )
}

export default App
