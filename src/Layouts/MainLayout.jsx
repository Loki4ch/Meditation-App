import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import sakuraImg from '../assets/images/sakura-30.png'

const StyledMainLayout = styled.div`
  .content {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
    background-color: ${props => props.theme.baseBackgroundColor};
    background-image: URL(${sakuraImg});
    background-repeat: no-repeat;
  }

  .content {
    //----------------------Scroll
    padding: 1rem;
    overflow-y: auto;
    direction: ltr;
  }

  .content::-webkit-scrollbar {
    width: 15px;
  }

  .content::-webkit-scrollbar-track {
    background-color: #cdeee2;
    border-radius: 100px;
    margin: 25px 0 25px 0;
  }

  .content::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-image: linear-gradient(180deg, #86e3ce 0%, ${props => props.theme.accentBackgroundColor} 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
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
            <Footer/>
        </StyledMainLayout>
    );
}

export default MainLayout;