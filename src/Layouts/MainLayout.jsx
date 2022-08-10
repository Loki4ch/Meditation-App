import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.accentBackgroundColor};
  }
  
  .content {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
    background-color: ${props => props.theme.baseBackgroundColor};
  }
  
  .footer {
    width: 100%;
    height: 20px;
    background-color: ${props => props.theme.accentBackgroundColor};
  }  
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout>
            <header className={'header'}></header>
            <main className={'content'}>
                {props.children}
            </main>
            <footer className={"footer"}></footer>
        </StyledMainLayout>
    );
}

export default MainLayout;