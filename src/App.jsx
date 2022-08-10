import React, {useState} from 'react';
import MainLayout from './Layouts/MainLayout.jsx';

const App = (props) => {
    const [someText, setSomeText] = useState('Hello');

    // const setSomeText = (newText) => {   -   это что происходит в хуке
    //     someText = newText;
    //     React.updateComponent();
    // }

    return (
        <MainLayout>
            <div onClick={() => {setSomeText('Hi')}}>
                {someText}
                {props.innerText}
            </div>
        </MainLayout>
    )
}

export default App;