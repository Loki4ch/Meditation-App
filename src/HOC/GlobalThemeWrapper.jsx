import React from "react";
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import loraFont from '../assets/fonts/Lora-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  * {
    color: rgb(205, 238, 226);
    box-sizing: border-box;
    font-family: Lora Regular, serif;
  }
  
  @font-face {
    font-family: 'Lora Regular';
    src: url(${loraFont}); format('ttf');
  }
  
  body {
    margin: 0;
    padding: 0;
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