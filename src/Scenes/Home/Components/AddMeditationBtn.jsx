import React, {useState} from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../../HOC/GlobalModalProvider.jsx";

const StyledAddMeditationBtn = styled.div`
  .add-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.baseBackgroundColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 40px;
    position: fixed;
    right: 40px;
    bottom: 60px;
    transition: all 0.3s;
  }
  
  .add-btn:hover {
    background: #afeddf;
    color: ${props => props.theme.accentBackgroundColor};
    box-shadow: 1px 3px 10px black;
  }

  .add-btn:active {
    background: #fefffc4d;
  }
`



const AddMeditationBtn = (props) => {

    const {meditationName, setMeditationName} = useState('');
    const {meditationDescription, setMeditationDescription} = useState('');

    const cardData = {name: meditationName, description: meditationDescription};

    const addMeditation = (value, setCardsList, cardsList) => {
        console.log('Meditation added');
        value(false);
        return setCardsList([...cardsList, cardData]);
    }

    return (
        <StyledAddMeditationBtn>
            <ModalContext.Consumer>
                {value => (
                    <button type={'button'} className={'add-btn'} onClick={() => value(
                        <React.Fragment>
                            <h4>Creating New Meditation</h4>
                            <input type={'text'} placeholder={'Enter meditation name'} onChange={(e) => {setMeditationName(e.target.value)}}
                                   value={meditationName}/>
                            <input type={'text'} placeholder={'Enter meditation description'} onChange={(e) => {setMeditationDescription(e.target.value)}}
                                   value={meditationDescription}/>
                            <button type={'button'} className={'modal-add-btn'} onClick={() => {addMeditation(value, props.setCardsList, props.cardsList)}}>Add</button>
                            <button type={'button'} className={'modal-cancel-btn'} onClick={() => {value(false)}}>Cancel</button>
                        </React.Fragment>
                    )}>+</button>
                )}
            </ModalContext.Consumer>
        </StyledAddMeditationBtn>
    );
};

export default AddMeditationBtn;