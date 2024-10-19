function Stopwatch (){
    const handleStartStop = ()=>{
        console.log("handleStopwatchStart clicked")
    }

    const handleReset = ()=>{
        console.log("handleReset Click")
    }
    return(
        <>
            <h1>00:00:00</h1>
            <div>
                <button onClick={handleStartStop}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

export default Stopwatch;