import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import sunsetImg from '../assets/images/sunset.jpg'

const StyledLoginLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.baseBackgroundColor};
  background-image: URL(${sunsetImg});
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  background-size: cover;
  
  .content {
    top: 10%;
    left: calc(50% - 140px);
    position: absolute;
    overflow: auto;
  }
`

const LoginLayout = (props) => {
    return (
        <StyledLoginLayout>
            <main className={'content'}>
                {props.children}
                <Outlet/>
            </main>
        </StyledLoginLayout>
    );
}

export default LoginLayout;