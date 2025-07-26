import { use, useState } from 'react'


function App() {
  const [color, setcolor] = useState("white");
  const [Count, setCount] = useState(0);
  const random_color=()=>{
   const random='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    setcolor(random)
  }
  const countChange=()=>{
      setCount(prev=>prev+1)
  }
  const InputCount=()=>{
    setCount(prev=>prev+1)

  }
  
  return (
    <>
    <div className="bg" style={{backgroundColor : color,height:"100vh",padding: "20px"}}>
      <h1>"Color changer"</h1>
      <button onClick={()=>{random_color();countChange();}}>Change Color</button>
      <p>Current color: <strong>{color}</strong></p>
      <p>Number of Times button was color was changed : {Count}</p>
      <input type="text"
      placeholder='Enter a color' 
      value={color}
      onChange={(e)=>{setcolor(e.target.value)}}
      onKeyDown={(e)=>{if(e.key==='Enter'){InputCount();}}}/>
    </div>
    </>
  )
}

export default App


// onKeyDown{(e)=>{if(e.key==='Enter')}}
// onClick{()=>{function1();function2;}}