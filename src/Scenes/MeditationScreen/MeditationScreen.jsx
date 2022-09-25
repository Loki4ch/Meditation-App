import React from 'react';
import styled from 'styled-components';

const StyledMeditationScreen = styled.div`
    
`

console.log('meditation screen rendered')

const MeditationScreen = (props) => {

    return (
        <StyledMeditationScreen>
            <div className={'main-wrapper'}>Meditation screen coming soon</div>
        </StyledMeditationScreen>
    );
}

MeditationScreen.propTypes = {};

export default MeditationScreen;