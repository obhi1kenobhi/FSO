const Header = ({course}) => {
  return (
      <h1>This is {course}</h1> 
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>
      The lesson, <strong>{part}</strong> contains {exercise} exercises
    </p>
  )
}

const Content = ({ part1, part2, part3 }) => {
  console.log({part1})
  console.log({part2})
  console.log({part3})
  return(
    <div>
        <Part part = {part1.name} exercise = {part1.exercises} />
        <Part part = {part2.name} exercise = {part2.exercises} />
        <Part part = {part3.name} exercise = {part3.exercises} />
    </div>
  )
}

const Total = ({total}) => {
  return(
  <p>Total number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = { name:'Fundamentals of React', exercises: 10 }
  const part2 = { name:'Using props to pass data', exercises: 7 }
  const part3 = { name:'State of a component', exercises: 14 }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App