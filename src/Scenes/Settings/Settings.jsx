import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {userLoggedOut} from "../../store/userSlice.js";

const StyledSettings = styled.div`
  .main-wrapper {
    max-width: 400px;
    min-height: 500px;
    margin: 30px 0 0 30px;
    padding: 15px;
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: ${props => props.theme.smallFontSize};
    border-radius: 25px;
    box-shadow: 0 0 20px black;
  }

  .title {
    text-align: center;
    font-size: ${props => props.theme.largeFontSize};
  }
  
  .inner-wrapper {
    margin-top: 25px;
  }
  
  .subtitle {
    font-size: ${props => props.theme.smallFontSize};
  }
  
  .theme-btn-wrapper {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .log-out-btn, .light-theme-btn, .dark-theme-btn{
    width: 110px;
    height: 40px;
    border: none;
    border-radius: 25px;
    background-color: #bc544b;
    transition: all 0.3s;
    font-size: ${props => props.theme.smallFontSize};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .log-out-btn:hover, .light-theme-btn:hover, .dark-theme-btn:hover {
    box-shadow: 0 0 10px white;
    text-shadow: 0 0 10px white;
  }

  .log-out-btn:active, .light-theme-btn:active, .dark-theme-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }

  .light-theme-btn {
    width: 90px;
    height: 35px;
    background: ${props => props.theme.startBtnColor};
  }
  //#40B5AD
  .dark-theme-btn {
    width: 90px;
    height: 35px;
    background: #13274F;
  }
  
  .email {
    margin-bottom: 10px;
  }
`


const Settings = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    return (
        <StyledSettings>
            <div className={'main-wrapper'}>
                <div className={'title'}>Settings</div>
                <div className={'inner-wrapper'}>
                    <p className={'subtitle'}>Theme mode:</p>
                    <div className={'theme-btn-wrapper'}>
                        <button className={'light-theme-btn'}>Light</button>
                        <button className={'dark-theme-btn'}>Dark</button>
                    </div>
                    <p className={'subtitle'}>My account:</p>
                    <div className={'email'}>{user.name}</div>
                    <button className={'log-out-btn'} type={'button'} onClick={() => {
                        dispatch(userLoggedOut());
                        console.log('user logged OUT');
                    }}>Log Out</button>
                </div>
            </div>
        </StyledSettings>
    );
}

Settings.propTypes = {};

export default Settings;