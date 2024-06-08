const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  return (
   <div> 
    <div>
      <h1>Greetings!</h1>
      <Hello name="Monica" age="25"/>
      <Hello name="Erica" age="21"/>
      <Hello name="Rita" age="22"/>
    </div>
    <div>
      <Hello name="Tina" age="23"/>
      <Hello name="Sandra" age="24"/>
      <Hello name="Mary" age="22"/>
      <Hello name="Jessica" age="26"/>
    </div>
   </div>
  )
}



export default App