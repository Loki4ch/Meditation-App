import React from 'react';
import styled from 'styled-components';


const StyledHome = styled.div`
  height: 1000px;
  background-color: ${props => props.theme.baseBackgroundColor};
`

const Home = (props) => {

    return (
        <StyledHome>

        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;