import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  .loader-1 .loader-outer {
    position: absolute;
    border: 4px solid #f50057;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
  }

  .loader-1 .loader-inner {
    position: absolute;
    border: 3px solid #f50057;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    left: calc(50% - 20px);
    top: calc(50% + 20px);
    border-right: 0;
    border-top-color: transparent;
    -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
    box-shadow: 0 0 10px white;
  }

  @-webkit-keyframes loader-1-inner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes loader-1-inner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
`


const Spinner = (props) => {

    return (
        <StyledSpinner>
            <section>
                <div className="loader loader-1">
                    <div className="loader-inner"></div>
                </div>
            </section>
        </StyledSpinner>
    );
}

Spinner.propTypes = {};

export default Spinner;