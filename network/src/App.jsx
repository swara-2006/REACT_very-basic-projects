import { useState,useEffect } from 'react'

import './App.css'

function App() {
  
const [isonline, setIsonline] = useState(true);
useEffect(() => {
  const onlineHandler=()=>{setIsonline(true)}
  const offlineHandler=()=>{setIsonline(false)}

  window.addEventListener("online",onlineHandler)
  window.addEventListener("offline",offlineHandler)
  return () => {
    window.removeEventListener('online',onlineHandler)
    window.removeEventListener('offline',offlineHandler)
  };
}, []);
  return (
    <>
    <div>
      <h2>Currently u are :{isonline?"🟢 Online" : "🔴 Offline"}</h2>
    </div>
    </>
  )
}

export default App
