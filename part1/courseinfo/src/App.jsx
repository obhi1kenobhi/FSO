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

const Content = ({ parts }) => {
  console.log({parts})
  let part1 = parts[0]
  let part2 = parts[1]
  let part3 = parts[2]
  return(
    <div>
        <Part part = {part1.name} exercise = {part1.exercises} />
        <Part part = {part2.name} exercise = {part2.exercises} />
        <Part part = {part3.name} exercise = {part3.exercises} />
    </div>
  )
}

const Total = ({total}) => {
  let totalsum = total[0].exercises + total[1].exercises + total[2].exercises
  return(
  <p>Total number of exercises {totalsum}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App