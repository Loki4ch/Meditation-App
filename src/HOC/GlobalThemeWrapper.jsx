import React, {useState, createContext} from "react";
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import heroFont from '../assets/fonts/Hero-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Hero Regular, serif;
    letter-spacing: 1px;
  }
  
  @font-face {
    font-family: 'Hero Regular';
    src: url(${heroFont}); format('ttf');
  }
  
  body {
    color: rgb(205, 238, 226);
    margin: 0;
    padding: 0;
  }
  
  button {
    cursor: pointer;
    color: rgb(205, 238, 226);
  }
`

export const ThemeFunctionContext = createContext('default value on error');

const GlobalThemeWrapper = (props) => {
    const [themeState, setThemeState] = useState('light');

    const themeSwitch = (themeMode) => {
        console.log('Theme changed')
        setThemeState(themeMode);
    }

    const themeChooser = () => {
        if (themeState === 'light') return globalLightTheme;
        else if (themeState === 'dark') return globalDarkTheme;
    }

    const globalLightTheme = {
        accentBackgroundColor: '#008081',
        baseBackgroundColor: '#40B5AD',
        partBackgroundTheme: 'white',
        additionalBackgroundColor: '#b2ffe5',
        startBtnColor: '#00A36C',
        baseFontColor: 'rgb(205, 238, 226)',
        additionalFontColor: '#008081',
        largeFontSize: '23px',
        smallFontSize: '18px'
    }

    const globalDarkTheme = {
        accentBackgroundColor: '#002244',
        baseBackgroundColor: '#2c3968',
        partBackgroundTheme: 'white',
        additionalBackgroundColor: '#b2ffe5',
        startBtnColor: '#5F8575',
        baseFontColor: 'rgb(205, 238, 226)',
        additionalFontColor: '#008081',
        largeFontSize: '23px',
        smallFontSize: '18px'
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={themeChooser()}>
                <ThemeFunctionContext.Provider value={themeSwitch}>
                    <GlobalStyle/>
                    {props.children}
                </ThemeFunctionContext.Provider>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default GlobalThemeWrapper;