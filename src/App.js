import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const[time,setTime] = useState(0);
  const[interVal,setIntervalValue] = useState(null);
  const[running,setRunning] = useState(false);
  useEffect(() =>{
    if(running){
      getTimeInterVal();
    }
    else{
      clearInterval(interVal);
    }
    return() =>{
      clearInterval(interVal);
    }
  },[time])
  const handleStartTimer = () =>{
    getTimeInterVal()
  }
  const getTimeInterVal  = () =>{
    setRunning(true);
     let runnValue=  setInterval(() =>{
        let val = time+1
        setTime(val);
      },1000);
      setIntervalValue(runnValue)
    }
  const handleStopTimer = () =>{
    console.log("clearInterval(interVal);",interVal)
    setRunning(false);
    clearInterval(interVal);
  }
  
  return (
    <div className="App">
     <h1>StopWatch</h1>
     <div className='stop-watch'>
     <h1> {time}</h1>
     </div>
     <div>
      <button onClick={handleStartTimer} style={{backgroundColor: 'LimeGreen', width:'100px', height:'40px',borderRadius:'10px'}}>Start</button>
      <button onClick={handleStopTimer} style={{marginLeft:'10px',backgroundColor:'#FF0000', width:'100px', height:'40px',borderRadius:'10px'}}>  Stop</button>
     </div>
    </div>
  );
}

export default App;
