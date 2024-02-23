
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [isOn, setOn]=useState(false);
  const [time, setTime] = useState(0);
  const [minute, setMinute] =  useState(0);
  const [second, setSecond] = useState(0);

  // ){
  //   let minu = Math.floor(time/60);
  //   let sec= time%60;
  //   setMinute(minu);
  //   setSecond(sec);
  // }
  console.log(time);

  // let callTimer;
  useEffect(() => {
    let intervalId;

    if (isOn) {
      const callTimer = () => {
        intervalId = setInterval(() => {
          setTime((prevCount) => prevCount + 1);
        }, 1000);
      };

      callTimer(); 
    }

    return () => clearInterval(intervalId);

  }, [isOn]);


const clickHandle = () =>{
  setOn(!isOn);
}
const resetData = () =>{
  setTime(0);
}
const formatted = (time) =>{
  let minu=Math.floor(time/60);
  let sec= time%60;
  let formattedMinute = minu < 10 ? `${minu}` : `0${minu}`;
  let formattedSecond = sec > 9 ? `${sec}` : `0${sec}`;
  return `${formattedMinute}:${formattedSecond}`;
}


  return (
    <div className="App">
      <h1 >Stopwatch</h1>
      <h3>Time: {formatted(time)}</h3>
      <button onClick={(clickHandle)}>{isOn? "Stop": "Start"}</button>
      <button onClick={resetData}>Reset</button>

    </div>
  );
}

export default App;
