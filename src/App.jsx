import React, {useState} from 'react';
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper.jsx'
import {BrowserRouter} from "react-router-dom";
import RootRouter from "./Routes/RootRouter.jsx";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./store/initStore.js";
import GlobalModalProvider from "./HOC/GlobalModalProvider.jsx";

const App = (props) => {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <GlobalThemeWrapper>
                        <GlobalModalProvider>
                            <RootRouter/>
                        </GlobalModalProvider>
                    </GlobalThemeWrapper>
                </BrowserRouter>
            </PersistGate>
        </Provider>

    )
}

export default App;