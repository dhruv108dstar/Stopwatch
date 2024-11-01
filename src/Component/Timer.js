import { useEffect, useState } from "react";



function Timer (){

    const [timer,setTimer] = useState(120);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(true);
    const [timeUp, setTimeUp] = useState(false)

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

    useEffect(()=>{
        if(timer <=0){
            setTimeUp(true);
            handleReset();
        }
    },[timer])

    const handleStart = ()=>{
        if(isActive) {
            setIsActive(false); 
            setIsPause(true);
            console.log("isActive1 : "+isActive +" isPause1 : "+isPause);
        }else{
            setIsActive(true);
            setIsPause(false);
            console.log("isActive : "+isActive + "isPause : "+isPause);
        }
    }

    const handleReset=()=>{        
        setIsActive(false);
        setTimer(120);
    }

    const formatTime = (time) => {
        const min = String("0"+time/60).slice(0,2).padStart(2,0);
        const second = String(Math.floor(time % 60)).padStart(2,0);
        return `${min}:${second}`;
      };
    return(
        <>
            {!timeUp ? <h1>{formatTime(timer)}</h1> : <h1>Time Up</h1>}
            {!timeUp?
                <div>
                    <button onClick={()=>handleStart()}>{!isActive ? "Start":"Pause"}</button>
                    <button onClick={handleReset}>Reset</button>
                </div>  : 
                <button onClick={()=>setTimeUp(false)}>Ok</button>            
            }
            
        </>
    )
}

export default Timer;