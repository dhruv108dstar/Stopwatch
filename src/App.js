import { useState } from "react";
import "./App.css";
import Timer from "./Component/Timer";
import Stopwatch from "./Component/Stopwatch";

function App() {
  const [isTimer,setIsTimer] = useState(false);
  const [isStopwatch, setIsStopwatch] = useState(false);
  const [homeComponent,showHomeComponent] = useState(true);

  const showTimer =()=>{
    setIsTimer(true);
    setIsStopwatch(false);
    showHomeComponent(false);
  }

  const showStopwatch = () =>{
    setIsTimer(false);
    setIsStopwatch(true);
    showHomeComponent(false);
  }

  return (
    <div className="App">
    <div>
        <div>
            <a>Stopwatch App</a>
        </div>
        <div>
            <button onClick={()=>showTimer()}>Timer</button>
            <button onClick={()=>showStopwatch()}>Stopwatch</button>
        </div>
        <div>
          {
            isTimer && <Timer/>
          }
          {
            isStopwatch && <Stopwatch />
          }
          {
            homeComponent && <h1>Welcome to Stopwatch App</h1>
          }

        </div>
    </div>
    </div>
  );
}

export default App;
