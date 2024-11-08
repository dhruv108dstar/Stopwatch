import { useEffect, useState } from "react";



function Timer (){

    const [timer,setTimer] = useState(120);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(true);
    const [timeUp, setTimeUp] = useState(false);
    const [isInput, setIsInput] = useState(false)
    const [editedTime, setEditedTime] = useState(120)

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
            setIsInput(false);
            console.log("isActive1 : "+isActive +" isPause1 : "+isPause);
        }else{
            setIsActive(true);
            setIsPause(false);
            setIsInput(false);
            console.log("isActive : "+isActive + "isPause : "+isPause);
        }
    }

    const handleReset=()=>{        
        setIsActive(false);
        setIsInput(false);
        setTimer(120);
    }

    const handleEdit = ()=>{
        console.log("handleEdit");
        setIsInput(true);
    }

    const formatTime = (time) => {
        const min = String("0"+time/60).slice(0,2).padStart(2,0);
        const second = String(Math.floor(time % 60)).padStart(2,0);
        return `${min}:${second}`;
        // placeholder="Enter the Timer in second"
      };
    return(
        <>
            {isInput ? <input className="" type="time" step="1" value={formatTime(editedTime)} onChange={(e)=>setEditedTime(e.target.value)} />:!timeUp ? <h1>{formatTime(timer)}</h1> : <h1>Time Up</h1>}
            {!timeUp?
                <div>
                    <button type="button" className="btn btn-success me-4" onChange={()=>handleStart()}>{!isActive ? "Start":"Pause"}</button>                    
                    {!isInput && <button type="button" className="btn btn-success me-4" onClick={handleEdit}>Edit</button>}
                    <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
                </div>  : 
                <button type="button" className="btn btn-success" onClick={()=>setTimeUp(false)}>Ok</button>            
            }
            
        </>
    )
}

export default Timer;