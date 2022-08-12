import React, {useState} from 'react';
import MainLayout from './Layouts/MainLayout.jsx';
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper.jsx'
import {BrowserRouter} from "react-router-dom";
import RootRouter from "./Routes/RootRouter.jsx";

const App = (props) => {
    // const [someText, setSomeText] = useState('Hello');

    return (
        <BrowserRouter>
            <GlobalThemeWrapper>
                    <RootRouter/>
            </GlobalThemeWrapper>
        </BrowserRouter>
    )
}

export default App;