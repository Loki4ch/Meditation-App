import React from 'react';
import { useTimer } from 'react-timer-hook';
import styled from "styled-components";

const StyledMyTimer = styled.div`
  
  .main-wrapper {
    margin-top: 10%;
    text-align: center;
  }
  
  .time {
    font-size: 100px;
  }
  
  .button {
    color: teal;     //сделать ерроры в формике, авторизацию, таблицу, разные картинки в завис от дейтайма, передачу времени в таймер, что то по завершении медитаци, смену темы
  }
`

const MyTimer = ({ expiryTimestamp }) => {
    const {seconds, minutes, isRunning, start, pause, resume, restart} = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <StyledMyTimer>
            <div className={'main-wrapper'}>
                <div className={'time'}>
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                <button className={'button'} onClick={start}>Start</button>
                <button className={'button'} onClick={pause}>Pause</button>
                <button className={'button'} onClick={resume}>Resume</button>
                <button className={'button'} onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time)
                }}>Restart</button>
            </div>
        </StyledMyTimer>
    );
}

export default function Timer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
};