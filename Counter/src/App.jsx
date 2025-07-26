import { useState } from 'react'


function App() {
  const [count, setcount] = useState(0);
 const increament=()=>{
  setcount(count+1)
 }
 const decreament=()=>{
  setcount(count-1)
 }
  return (
    <>
      <button onClick={increament}>Increase</button>
      <button onClick={decreament}>Decrease</button>
      <h1>{count}</h1>
    </>
  )
}
export default App
