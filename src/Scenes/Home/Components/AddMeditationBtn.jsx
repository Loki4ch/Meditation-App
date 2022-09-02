import React, {useState} from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../../HOC/GlobalModalProvider.jsx";
import {Form, Formik} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";

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
`



const AddMeditationBtn = (props) => {

    const cardData = {
        name: '',
        description: '',
    };

    const initialFormValues = {
        name: '',
        description: '',
    };

    const addMeditation = (value, setCardsList, cardsList) => {
        console.log('Meditation added');
        value(false);
        return setCardsList([...cardsList, cardData]);
    };


    return (
        <StyledAddMeditationBtn>
            <ModalContext.Consumer>
                {value => (
                    <button type={'button'} className={'add-btn'} onClick={() => value(
                        <React.Fragment>
                            <div className={'modal-title-wrapper'}>
                                <h3 className={'modal-title'}>Creating New Meditation</h3>
                            </div>
                            <Formik initialValues={initialFormValues} validate={(formValues) => {
                                let isValid = true;
                                const errors = {};
                                if (!formValues.name) {
                                    isValid = false;
                                    errors.login = 'Name is mandatory';
                                } else if (formValues.name.length > 43) {
                                    isValid = false;
                                    errors.login = 'Name is too long';
                                }
                                if (!isValid) return errors;
                            }
                            } onSubmit={(formValues) => {
                                cardData.name = formValues.name;
                                cardData.description = formValues.description;
                                addMeditation(value, props.setCardsList, props.cardsList);
                            }}>
                                <Form>
                                    <FormikInput name={'name'} placeholder={'Enter meditation name'} type={'text'} label={'Name'}/>
                                    <FormikInput name={'description'} placeholder={'Enter meditation name'} type={'text'} label={'Description'}/>
                                    <button type={'submit'} className={'modal-add-btn'}>Add</button>
                                    <button type={'button'} className={'modal-cancel-btn'} onClick={() => {value(false)}}>Cancel</button>
                                </Form>
                            </Formik>
                        </React.Fragment>
                    )}>+</button>
                )}
            </ModalContext.Consumer>
        </StyledAddMeditationBtn>
    );
};







export default AddMeditationBtn;