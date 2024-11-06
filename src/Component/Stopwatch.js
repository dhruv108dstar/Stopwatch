import { useEffect, useState } from "react";

function Stopwatch (){
    const [isActive, setIsActive] = useState(false);
    const [isPause,setIsPause] = useState(true);
    const [stopwatchTimer,setStopwatchTimer ] = useState(0);
    const [buttonState, setButtonState] = useState("Start");
    
    useEffect(()=>{
        let intervalId;
        if(isActive && !isPause){
            intervalId = setInterval(() => {
                setStopwatchTimer((stopwatchTimer)=>stopwatchTimer + 10)
            }, 10);
        }else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };

    },[isActive,isPause]);


    const handleStartStop = (buttonState)=>{
        if(buttonState === "Start"){
            setIsActive(true);
            setIsPause(false);
            setButtonState("Pause");
        }else{
            setIsActive(false);
            setIsPause(true);
            setButtonState("Start");
        }
    }

    const handleReset = ()=>{
        setIsActive(false);
        setIsPause(true);
        setStopwatchTimer(0);
        setButtonState("Start");
    }

    const formatTime = (time) => {
        const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
        const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        return `${minutes}:${seconds}:${milliseconds}`;
      };

    return(
        <>
        <div>            
            <h1>{formatTime(stopwatchTimer)}</h1>
        </div>
        <div>
            <button type="button" className="btn btn-success me-2" onClick={()=>handleStartStop(buttonState)}>{buttonState}</button>
            <button type="button" className="btn btn-danger ms-2" onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}

export default Stopwatch;