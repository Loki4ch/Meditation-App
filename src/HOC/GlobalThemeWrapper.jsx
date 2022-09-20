import React from "react";
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

const GlobalThemeWrapper = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={{accentBackgroundColor: '#008081', baseBackgroundColor: '#40B5AD', partBackgroundTheme: 'white', additionalBackgroundColor: '#b2ffe5', startBtnColor: '#00A36C', baseFontColor: 'rgb(205, 238, 226)', additionalFontColor: '#008081', largeFontSize: '23px', smallFontSize: '18px'}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default GlobalThemeWrapper;