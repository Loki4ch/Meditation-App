import React, {useState} from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../../HOC/GlobalModalProvider.jsx";
import {Form, Formik, Field} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";

const StyledAddMeditationBtn = styled.div`

`

const ModalContent = (props) => {

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
    )
}


export default ModalContent;


