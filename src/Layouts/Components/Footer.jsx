import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    width: 100%;
    height: 21px;
    background-color: ${props => props.theme.accentBackgroundColor};
    box-shadow: 0 0 10px black;
    position: relative;
    z-index: 3000;
`

const Footer = () => {
    return (
            <StyledFooter>

            </StyledFooter>
    )
}

export default Footer;