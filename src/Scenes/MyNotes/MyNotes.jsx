import React from 'react';
import styled from 'styled-components';

const StyledMyNotes = styled.div`
  .main-wrapper {
    position: absolute;
    top: 120px;
    left: calc(50% - 125px);
    width: 300px;
    height: 40px;
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: ${props => props.theme.smallFontSize};
    border-radius: 25px;
    box-shadow: 0 0 10px white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`


const MyNotes = (props) => {

    return (
        <StyledMyNotes>


        </StyledMyNotes>
    );
}

MyNotes.propTypes = {};

export default MyNotes;