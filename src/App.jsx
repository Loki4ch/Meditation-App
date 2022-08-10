import React, {useState} from 'react';
import MainLayout from './Layouts/MainLayout.jsx';
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper.jsx'
import LoginPage from "./Scenes/LoginPage.jsx";

const App = (props) => {
    // const [someText, setSomeText] = useState('Hello');

    return (
        <GlobalThemeWrapper>
            <MainLayout>
                <LoginPage/>
            </MainLayout>
        </GlobalThemeWrapper>
    )
}

export default App;