import { useState } from 'react'


function App() {
  const [text, setText] = useState("");
  const [displaytext, setdisplaytext] = useState("");
  const [result, setresult] = useState("");

  const updateText=()=>{
    setdisplaytext(text)
  }
  const deleteText =(input)=>{
   setdisplaytext("")
  }
  const isPalidrome=(str)=>{
    const cleaned = str
      .toLowerCase()
      .replace(/[\W_]/g, '');               // strip out non-alphanumeric
    return cleaned === cleaned.split('').reverse().join('');
    
  }//str instead of text as it makes the palidrome reusable.
  
const palidrome=()=>{
  if (!text.trim()) {
      setresult("Pls enter a word!!!")
    }
    else if (isPalidrome(text)) {
      setresult("It is  a palidrome.")
      
    } else {
      setresult("It is not a palidrome")
    }
}
  return (
    <>
    <input type="text"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder='Pls input some text'
     />
     <button onClick={updateText}>Submit</button>
     <button onClick={deleteText}>Delete</button>
      <button onClick={palidrome}>Palidrome Y/N?</button>
     <p>You entered: {displaytext}</p>
     <p>{result}</p>
    </>
  )
}

export default App
 