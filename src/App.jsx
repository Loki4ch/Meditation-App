import React, {useState} from 'react';
import MainLayout from './Layouts/MainLayout.jsx';
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper.jsx'

const App = (props) => {
    const [someText, setSomeText] = useState('Hello');

    // const setSomeText = (newText) => {   -   это что происходит в хуке
    //     someText = newText;
    //     React.updateComponent();
    // }

    return (
        <GlobalThemeWrapper>
            <MainLayout>
                <div onClick={() => {setSomeText('Hi')}}>
                    {someText}
                    {props.innerText}
                </div>
            </MainLayout>
        </GlobalThemeWrapper>
    )
}

export default App;