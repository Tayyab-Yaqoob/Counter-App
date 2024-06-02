import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  const increament =() => {
    if (counter===20) {
      setCounter(20)
    }else{
    setCounter(counter+1)}
  }

  const decreament =() => {
    if (counter===0) {
      setCounter(0)
    }else{
    setCounter(counter-1)}
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter Value {counter}</h2> <br />
     <button onClick={increament}>Add Value</button><br />
     <button onClick={decreament}>Remove Value</button>

    </>
  )
}

export default App
