import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(120);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [timeUp, setTimeUp] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [editedTime, setEditedTime] = useState(formatTime(timer));

  useEffect(() => {
    let intervalId;
    if (isActive && !isPause) {
      intervalId = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, isPause]);

  useEffect(() => {
    if (!isInput) {
      if (timer <= 0) {
        setTimeUp(true);
        handleReset();
      }
    }
  }, [timer]);

  const handleStart = () => {
    if (isActive) {
      setIsActive(false);
      setIsPause(true);
      setIsInput(false);
      console.log("isActive1 : " + isActive + " isPause1 : " + isPause);
    } else if (isInput) {
      setTimer(timeInSecond(editedTime));
      setIsActive(true);
      setIsPause(false);
      setIsInput(false);
    } else {
      console.log(
        "type of editedTime : " + typeof editedTime + " editedTime : " + isInput
      );
      setIsActive(true);
      setIsPause(false);
      setIsInput(false);
      console.log("isActive : " + isActive + "isPause : " + isPause);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setIsInput(false);
    setTimer(120);
  };

  const timeInSecond = (str) => {
    //00:05:02
    let second = 0;
    let timeArray = str.split(":");
    let [hour, min, sec] = timeArray;
    return (second = Number(hour * 60 * 60) + Number(min) * 60 + Number(sec));
  };

  const handleEdit = () => {
    console.log("handleEdit");
    setEditedTime(formatTime(timer));
    setIsPause(true);
    setIsActive(false);
    setIsInput(true);
  };

  function formatTime(time) {
    const min = String("0" + time / 60)
      .slice(0, 2)
      .padStart(2, 0);
    const hour = "00";
    const second = String(Math.floor(time % 60)).padStart(2, 0);
    return `${hour}:${min}:${second}`;
  }
  return (
    <>
      {!isInput &&
        (!timeUp ? (
          <div>
            <h1>{formatTime(timer)}</h1>
            <button
              type="button"
              className="btn btn-success me-4"
              onClick={() => handleStart()}
            >
              {!isActive ? "Start" : "Pause"}
            </button>
            {!isInput && (
              <button
                type="button"
                className="btn btn-success me-4"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        ) : (
          <div>
            <h1>Time Up</h1>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setTimeUp(false)}
            >
              Ok
            </button>
          </div>
        ))}
      {isInput && (
        <>
          <input
            type="time"
            onChange={(e) => setEditedTime(e.target.value)}
            value={editedTime}
            step="1"
          />
          <div style={{marginTop:"28.2px"}}>
            <button
              type="button"
              className="btn btn-success me-4"
              onClick={() => handleStart()}
            >
              Ok
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Timer;
