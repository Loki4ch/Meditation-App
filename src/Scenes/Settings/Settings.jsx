import React from 'react';
import styled from 'styled-components';

const StyledSettings = styled.div`
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


const Settings = (props) => {

    return (
        <StyledSettings>
            <div className={'main-wrapper'}>Settings coming soon...</div>
        </StyledSettings>
    );
}

Settings.propTypes = {};

export default Settings;