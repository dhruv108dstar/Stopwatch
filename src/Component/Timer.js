import { useEffect, useState } from "react";



function Timer (){

    const [timer,setTimer] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(true);

    useEffect(()=>{
        let intervalId;
        if(isActive && !isPause){
            intervalId = setInterval(()=>{
                setTimer(time=>time-1)
            },1000);  
        }else{
            clearInterval(intervalId);
        }
        return ()=>{
            clearInterval(intervalId);
        }      
    },[isActive,isPause]);

    const handleStart = ()=>{
        setIsActive(true);
        setIsPause(false);
        console.log("isActive : "+isActive + "isPause : "+isPause);
    }

    const handleReset=()=>{        
        setIsActive(false);
        setTimer(60);
    }

    const formatTime = (time) => {
        const hour = ("0" + (Math.floor(time / 10) % 60)).slice(-2);
        const seconds = ("0" + (Math.floor(time / 10) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(time / 60) % 60)).slice(-2);
        return `${hour}:${minutes}:${seconds}`;
      };
    return(
        <>
            <h1>{formatTime(timer)}</h1>
            <button onClick={()=>handleStart()}>{!isActive ? "Start":"Pause"}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Timer;