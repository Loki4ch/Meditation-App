import React from 'react';
import styled from 'styled-components';

const StyledMeditationScreen = styled.div`
  .main-wrapper {
    position: absolute;
    width: 100vw;
    height: 100%;
    top: -100vh;
    left: 0;
    background-color: orangered;
    z-index: 2999;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: slideDown;
    animation-name: slideDown;
  }

  @-webkit-keyframes slideDown {
    0% {top: -100vh;}
    100% {top: 0;}
  }
  @keyframes slideDown {
    0% {top: -100vh;}
    100% {top: 0;}
  }
`

console.log('meditation screen rendered')

const MeditationScreen = (props) => {

    return (
        <StyledMeditationScreen>
            <div className={'main-wrapper'}>

            </div>
        </StyledMeditationScreen>
    );
}

MeditationScreen.propTypes = {};

export default MeditationScreen;