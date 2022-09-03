import React, {useState} from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../../HOC/GlobalModalProvider.jsx";
import {Form, Formik, Field} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";
import ModalContent from "./ModalContent.jsx";

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
    box-shadow: 1px 3px 10px black;
  }

  .add-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }

  .modal-title-wrapper {
    align-items: center;
  }
  
  .modal-title {
    margin-top: 10px;
  }
  
  .form {
    display: flex;
    justify-content: center;
  }
  
  .radio-wrapper
`

const AddMeditationBtn = (props) => {

    const cardData = {
        name: '',
        description: '',
    };

    // const addMeditation = (value, setCardsList, cardsList) => {
    //     console.log('Meditation added');
    //     value(false);
    //     return setCardsList([...cardsList, cardData]);
    // };


    return (
        <StyledAddMeditationBtn>
            <ModalContext.Consumer>
                {value => (
                    <button type={'button'} className={'add-btn'} onClick={() => value(<ModalContent modalValue={value}/>)}>+</button>
                )}
            </ModalContext.Consumer>
        </StyledAddMeditationBtn>
    );
};







export default AddMeditationBtn;