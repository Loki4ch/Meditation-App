import React from 'react';
import styled from 'styled-components';

const StyledAddMeditationBtn = styled.div`
  .add-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.accentBackgroundColor};
    background-color: ${props => props.theme.additionalBackgroundColor};
    font-size: 40px;
    position: fixed;
    right: 40px;
    bottom: 60px;
  }
`

const AddMeditationBtn = () => {
    return (
        <StyledAddMeditationBtn>
            <button className={'add-btn'} onClick={() => console.log('AddMeditationBtn clicked')}>+</button>
        </StyledAddMeditationBtn>
    );
};

export default AddMeditationBtn;