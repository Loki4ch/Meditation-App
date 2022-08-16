import React, {useState} from 'react';
import MainLayout from './Layouts/MainLayout.jsx';
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper.jsx'
import {BrowserRouter} from "react-router-dom";
import RootRouter from "./Routes/RootRouter.jsx";
import {Provider} from "react-redux";
import {store} from "./store/initStore.js";
import GlobalModalProvider from "./HOC/GlobalModalProvider.jsx";

const App = (props) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <GlobalThemeWrapper>
                    <GlobalModalProvider>
                        <RootRouter/>
                    </GlobalModalProvider>
                </GlobalThemeWrapper>
            </Provider>
        </BrowserRouter>
    )
}


export default App;