import React from 'react';
import styled from 'styled-components';
import pineLight from '../../assets/images/pineLight.jpg'
import Timer from "../../Components/MyTimer/MyTimer.jsx";
import Cross from '../../assets/icons/cross.svg';

const StyledMeditationScreen = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    top: -100vh;
    left: 0;
    background-image: URL(${pineLight});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 2999;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: slideDown;
    animation-name: slideDown;
  
  .main-wrapper {
    
  }

  @-webkit-keyframes slideDown {
    0% {top: -100vh;}
    100% {top: 0;}
  }
  @keyframes slideDown {
    0% {top: -100vh;}
    100% {top: 0;}
  }

  .cancel-btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cancel-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.baseFontColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 20px;
    transition: all 0.3s;
    letter-spacing: 0;
    padding: 5px;
    transform: translateY(-23px);
    box-shadow: 0 0 15px white;
  }

  .cancel-btn:hover {
    box-shadow: 0 0 15px red;
    text-shadow: 0 0 15px red;
  }

  .cancel-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }
`

console.log('meditation screen rendered')

const MeditationScreen = (props) => {

    return (
        <StyledMeditationScreen>
            <div className={'main-wrapper'}>
                {Timer(+props.duration * 60)}
                <div className={'cancel-btn-wrapper'}>
                    <button type={'button'} className={'cancel-btn'} onClick={() => {props.setMeditationStarted(false)}}><Cross/></button>
                </div>
            </div>
        </StyledMeditationScreen>
    );
}

MeditationScreen.propTypes = {};

export default MeditationScreen;