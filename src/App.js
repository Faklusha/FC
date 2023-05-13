import './App.scss'
import beat from './images/beat.gif'
import {useState} from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Julia from "./components/Julia";
import Monstr from "./components/Monstr";
import BackgroundCircles from "./components/BackgroundCircles";

function App() {
    const [isStarted, setIsStarted] = useState(false)
    const [isRun, setIsRun] = useState(false)
    const [isBeating, setIsBeating] = useState(false)
    const [isWined, setIsWined] = useState(false)
    const [monstrIsWined, setMonstrIsWined] = useState(true)
    const [monstrIsBeating, setMonstrIsBeating] = useState(false)
    const handleBeatButtonClick = () => {
        setIsBeating(true);

        setTimeout(() => {
            setMonstrIsBeating(true)
        }, 500)

        setTimeout(() => {
            setIsBeating(false)
        }, 2000)

        setTimeout(() => {
            setMonstrIsBeating(false)
        }, 4000)
    }

    const handleWinButtonClick = () => {
        setIsWined(true);
        setMonstrIsWined(true);
        setTimeout(() => {
            setIsWined(false);
            setIsStarted(false);
            setIsRun(true)
        }, 3500);

        setTimeout(() => {
            setIsRun(false)
            setIsStarted(false)
        }, 6500)
    }

    const handleStartButtonClick = () => {
        setIsStarted(true);
        setMonstrIsWined(false)
        setIsRun(true)
        setTimeout(() => {
            setIsRun(false)
        }, 5000)
    }

    return (
        <div className="app">
            <BackgroundCircles/>
            <Header/>
            <div className="content">
                <Background/>
                <div className="content__controls">
                    {!isStarted &&
                        <div className="content__controls_button" onClick={handleStartButtonClick}>Start</div>
                    } {isStarted &&
                    <div className="content__controls_button" onClick={handleBeatButtonClick}>Beat it</div>
                }
                    {isStarted && <div className="content__controls_button" onClick={handleWinButtonClick}>Win</div>
                    }                </div>
                {
                    isBeating && <div className="content__beat">
                        <div className="content__beat_image" style={{
                            backgroundImage: `url(${beat})`
                        }}/>
                    </div>
                }

                <Julia isBeating={isBeating} isWined={isWined} isStarted={isStarted} isRun={isRun}/>

                <Monstr monstrIsBeating={monstrIsBeating} isStarted={!monstrIsWined && isStarted}/>

            </div>
        </div>
    );
}

export default App;
