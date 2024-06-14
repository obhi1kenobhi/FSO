import { useState } from 'react' // file imports useState function

const App = () => {
  const [ counter, setCounter ] = useState(0) 
  /* the function call adds state to the component and renders it 
  initialized with the value zero. Function returns an array that 
  contains two items - initial value of state and function to modify
   state
  */ 

setTimeout(
  () => setCounter(counter + 1),
  1000
)
/* When the state modifying function setCounter is called, React 
re-renders the component which means that the function body of the 
component function gets re-executed
*/
console.log('rendering...', counter)

return (
  <div>{counter}</div>
)

}

export default App