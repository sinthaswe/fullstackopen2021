import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.num}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>

      <Content part={part1}/> <Total num={exercises1}/>

      <Content part={part2}/> <Total num={exercises2}/>

      <Content part={part3}/> <Total num={exercises3}/>
      <p>Number of exercises</p>
      <Total num={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

export default App
