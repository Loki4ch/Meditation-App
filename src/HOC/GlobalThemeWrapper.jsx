import React from "react";
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`



const GlobalThemeWrapper = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={{accentBackgroundColor: 'green', baseBackgroundColor: 'aquamarine', partBackgroundTheme: 'white'}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default GlobalThemeWrapper;