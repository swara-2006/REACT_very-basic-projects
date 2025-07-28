import React, { useState , useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const setIntervalId=setInterval(()=>{
            setTime(new Date())
        },1000)
      return () => {
        clearInterval(setIntervalId)
      };
    }, []);
  return (
    <div>
      <h1>Timer</h1>
      <p>Current time:{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;

