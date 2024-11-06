import { useState } from "react";
import "./App.css";
import Timer from "./Component/Timer";
import Stopwatch from "./Component/Stopwatch";
import StopwatchLogo from "./stopwatch-svgrepo-com.svg";
import Footer from "./Component/Footer";

function App() {
  const [isTimer, setIsTimer] = useState(false);
  const [isStopwatch, setIsStopwatch] = useState(false);
  const [homeComponent, showHomeComponent] = useState(true);

  const showTimer = () => {
    setIsTimer(true);
    setIsStopwatch(false);
    showHomeComponent(false);
  };

  const showStopwatch = () => {
    setIsTimer(false);
    setIsStopwatch(true);
    showHomeComponent(false);
  };

  const showWelcomeComponent = ()=>{    
    setIsTimer(false);
    setIsStopwatch(false);
    showHomeComponent(true);
  }

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bg-color">
          <div className="container-fluid">
            <a className="navbar-brand ms-1" href="#" onClick={showWelcomeComponent}>
              <img
                src={StopwatchLogo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top me-1"
              />
              Stopwatch App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ms-5">
                  <a className="nav-link" onClick={() => showTimer()} href="#">
                    Timer
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <a className="nav-link" onClick={() => showStopwatch()} href="#">
                    Stopwatch
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-outline-dark" type="submit">
                  Nigth Mode
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div style={{margin: "auto",width: "80%",padding: "157px 157px 156px 157px"}}>
          {isTimer && <Timer />}
          {isStopwatch && <Stopwatch />}
          {homeComponent && 
          <div>
          <h1 className="typewriter-effect">Welcome to Stopwatch App</h1>
        </div>}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
