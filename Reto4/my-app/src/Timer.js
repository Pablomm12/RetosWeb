import React, { useState, useEffect } from "react";
import './Timer.css';

const Timer = () => {
    const [time, setTime] = useState(0); // Time in seconds
    const [isActive, setIsActive] = useState(false); // To track whether the timer is active or not

    // Effect hook to run the timer
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    // Functions to start, stop, and reset the timer
    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(0);
    };

    // Helper function to format time into minutes and seconds
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes} mins ${seconds < 10 ? `0${seconds}` : seconds} secs`;
    };

    return (
        <div className="wrapper">
            <h1>Timer:</h1>
            <div className="timer-display">
                {formatTime(time)}
            </div>
            <div className="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
