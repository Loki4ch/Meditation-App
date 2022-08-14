import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${props => props.theme.accentBackgroundColor};;
  
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
  }

  .header-logo {
    margin: 0;
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

  li {
    margin: 0;
    list-style: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: block;
    padding: 14px 10px;
    transition: all 0.3s;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

const Header = () => {
    return (
        <StyledHeader className="header">
            <div className="header-wrapper">
                <Link to="/home">
                    <img src={'../../assets/images/Logo.png'} className="header-logo" alt={'Logo'}/>
                </Link>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/home">
                        <li>Notes</li>
                    </Link>
                    <Link to="/home">
                        <li>Achievements</li>
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