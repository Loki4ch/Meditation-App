import React from "react";
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import VogueNormal from '../assets/fonts/Vogue-Normal.ttf'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Vogue Normal, sans-serif;
  }

  @font-face {
    font-family: 'Vogue Normal';
    src: url(${VogueNormal}); format('ttf');
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`
// #5cdb95  #3AAFA9
const GlobalThemeWrapper = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={{accentBackgroundColor: '#008081', baseBackgroundColor: 'aquamarine', partBackgroundTheme: 'white', additionalBackgroundColor: 'orange'}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default GlobalThemeWrapper;