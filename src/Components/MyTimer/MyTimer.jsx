import React from 'react';
import { useTimer } from 'react-timer-hook';
import styled from "styled-components";
import Start from '../../assets/icons/start2.svg';
import Pause from '../../assets/icons/pause.svg';
import Resume from '../../assets/icons/resume.svg';
import classNames from "classnames";

const StyledMyTimer = styled.div`
  
  .main-wrapper {
    margin-top: 110px;
    text-align: center;
  }
  
  .is-meditating-text {
    font-size: 20px;
    text-shadow: 0 0 7px white;
  }
  
  .time {
    font-size: 100px;
    text-shadow: 0 0 7px white;
  }
  
  .btn-wrapper {
    margin-top: 520px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  
  .button {
                    //сделать ерроры в формике, авторизацию, таблицу, стилизнуть радио, разные картинки в завис от дейтайма, передачу времени в таймер, что то по завершении медитаци, смену темы
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.baseFontColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 20px;
    transition: all 0.3s;
    letter-spacing: 0;
    padding: 5px;
    box-shadow: 0 0 15px white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .meditate-btn {
    font-size: 30px;
  }

  .pause-btn {
    font-size: 5px;
  }

  .resume-btn {
    font-size: 5px;
  }

  .restart-btn {
    font-size: 16px;
  }
  
  .button:hover {
    box-shadow: 0 0 15px midnightblue;
    text-shadow: 0 0 15px midnightblue;
  }

  .button:active {
    background: ${props => props.theme.baseBackgroundColor};
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
                <p className={'is-meditating-text'}>{isRunning ? 'MEDITATING' : 'MEDITATION PAUSED'}</p>
                <div className={'btn-wrapper'}>
                    <button className={classNames('button', 'meditate-btn')} onClick={start}><Start/></button>
                    <button className={classNames('button', 'pause-btn')} onClick={pause}><Pause/></button>
                    <button className={classNames('button', 'resume-btn')} onClick={resume}><Resume/></button>
                    <button className={classNames('button', 'restart-btn')} onClick={() => {
                        // Restarts to 5 minutes timer
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + 300);
                        restart(time)
                    }}>5min</button>
                </div>
            </div>
        </StyledMyTimer>
    );
}

export default function Timer(timerValue) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timerValue); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
};