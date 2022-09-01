import React from "react";
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import loraFont from '../assets/fonts/Lora-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  * {
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
            <ThemeProvider theme={{accentBackgroundColor: '#008081', baseBackgroundColor: 'aquamarine', partBackgroundTheme: 'white', additionalBackgroundColor: '#b2ffe5'}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default GlobalThemeWrapper;