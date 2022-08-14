import React from 'react';
import styled from 'styled-components';
import AddMeditationBtn from "../Components/AddMeditationBtn/AddMeditationBtn.jsx";


const StyledHome = styled.div`
  background-color: ${props => props.theme.baseBackgroundColor};
  position: relative;
`

const Home = (props) => {

    return (
        <StyledHome>
            <AddMeditationBtn/>
        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;