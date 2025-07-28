import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch_data()
     
  }, []);

  const fetch_data= async () => {
    const response= await fetch("https://randomuser.me/api")
    const data=await response.json()
    console.log(data);
    
    setUser(data.results[0])
    
  }

  return (
    <><h1>Hello !!!!!!!!</h1>
    <button onClick={fetch_data}>Click to see user Data.</button>
    {user?(<div>
    <h2>User name :{user.name.first} {user.name.last}</h2>
    <h2>User email :{user.email}</h2>
    <h2>Gender :{user.gender}</h2>
    <h3>location : {user.location.city},{user.location.state}</h3>
    </div>):
    (  <p>Still loading..........</p>
    )}
    
    
  
    </>
  )
}

export default App
