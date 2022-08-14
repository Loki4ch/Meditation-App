import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import Header from "../Components/Header/Header.jsx";

const StyledMainLayout = styled.div`
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
            <Header/>
            <main className={'content'}>
                {props.children}
                <Outlet/>
            </main>
            <footer className={"footer"}></footer>
        </StyledMainLayout>
    );
}

export default MainLayout;