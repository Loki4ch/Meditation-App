import React, {useState} from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../../HOC/GlobalModalProvider.jsx";
import {Form, Formik, Field} from "formik";
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

    const initialFormValues = {
        name: '',
        description: '',
        picked: ''
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
                                <h2 className={'modal-title'}>Creating New Meditation</h2>
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
                                {({values}) => (
                                <Form>
                                    <div className={'form'}>
                                        <FormikInput name={'name'} placeholder={'Enter meditation name'} type={'text'} label={'Name'}/>
                                        <FormikInput name={'description'} placeholder={'Enter meditation name'} type={'text'} label={'Description'}/>
                                        <h4 id="radio-group">Choose meditation daytime</h4>
                                        <div role="group" aria-labelledby="radio-group" className={'radio-wrapper'}>
                                            <label>
                                                <Field type="radio" name="picked" value="morning" />
                                                Morning meditation
                                            </label>
                                            <label>
                                                <Field type="radio" name="picked" value="afternoon" />
                                                Afternoon meditation
                                            </label>
                                            <label>
                                                <Field type="radio" name="picked" value="evening" />
                                                Evening meditation
                                            </label>
                                            <div>Picked: {values.picked}</div>
                                        </div>
                                        <button type={'submit'} className={'modal-add-btn'}>Add</button>
                                        <button type={'button'} className={'modal-cancel-btn'} onClick={() => {value(false)}}>Cancel</button>
                                    </div>
                                </Form>
                                    )}
                            </Formik>
                        </React.Fragment>
                    )}>+</button>
                )}
            </ModalContext.Consumer>
        </StyledAddMeditationBtn>
    );
};







export default AddMeditationBtn;