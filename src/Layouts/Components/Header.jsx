import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Logo from '../../assets/images/logoImg.png';

const StyledHeader = styled.div`
  background-color: ${props => props.theme.accentBackgroundColor};
  color: ${props => props.theme.accentBackgroundColor};
  box-shadow: 0 0 10px black;
  position: relative;
  z-index: 3000;
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
  }

  .header-logo {
    margin: 5px 0 0 0;
    width: 150px;
    height: 40px;
  }

  ul {
    height: 100%;
    display: flex;
    gap: 40px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    align-items: center;
  }

  li:hover {
    background: #fefffc4d;
  }

  li:active {
    background: white;
    color: #008081;
  }

  li {
    margin: 0;
    list-style: none;
    font-size: 18px;
    cursor: pointer;
    display: block;
    padding: 13px 10px;
    transition: all 0.2s;
  }

  a {
    text-decoration: none;
    color: rgb(205, 238, 226);
  }
`

const Header = () => {
    return (
        <StyledHeader>
            <div className="header-wrapper">
                <Link to="/home">
                    <img src={Logo} className="header-logo" alt={'Logo'}/>
                </Link>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/home">
                        <li>My Notes</li>
                    </Link>
                    <Link to="/meditation-basics">
                        <li>Meditation Basics</li>
                    </Link>
                    <Link to="/home">
                        <li>Settings</li>
                    </Link>
                </ul>
            </div>
        </StyledHeader>
    );
};

export default Header;