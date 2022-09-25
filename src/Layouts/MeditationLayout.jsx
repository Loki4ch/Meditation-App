import React from 'react';
import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import sunsetImg from '../assets/images/sunset.jpg'

const StyledMeditationLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.baseBackgroundColor};
  background-image: URL(${sunsetImg});
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  background-size: cover;
`

const MeditationLayout = (props) => {
    return (
        <StyledMeditationLayout>
            <div className={'content'}>
                {props.children}
                <Outlet/>
            </div>
        </StyledMeditationLayout>
    );
}

export default MeditationLayout;