import {useState} from 'react'
import './App.css'


function App() {
  let [counter , setCounter] = useState(15)
  // let counter = 15

  const addValue = ()=>{
    counter++
    setCounter(counter)
  }

  const decreaseValue = ()=>{
    if (counter == 0 ) {
      return 
    }
    counter--
    setCounter(counter)
  }

  return (
    <>
    <div>
    <h1>Counter App</h1>
      <h2>Count: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={decreaseValue}
      >Decrease Value</button>
    </div>

    </>
  )
}
export default App
