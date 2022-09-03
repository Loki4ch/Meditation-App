import React from 'react';
import styled from 'styled-components';
import {Form, Formik, Field} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";

const StyledModalContent = styled.div`
  .modal-title-wrapper {
    text-align: center;
  }

  .modal-title {
    margin: 10px 0 10px 0;
  }

  .input-fields-wrapper {
  }
  
  .input-field {
    display: flex;
  }
  
  .radio-group-title {
    margin: 20px 0 10px 0;
  }

  .radio-wrapper {
    display: flex;
    flex-direction: column;
  }
`

const EditModalContent = (props) => {
    const initialFormValues = {
        name: '',
        description: '',
    };

    const cardData = {
        name: '',
        description: '',
        daytime: '1',
    };

    const addMeditation = (value, setCardsList, cardsList) => {
        console.log('Meditation added');
        value(false);
        return setCardsList([...cardsList, cardData]);
    };

    return (
        <StyledModalContent>
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
                    addMeditation(props.modalValue, props.setCardsList, props.cardsList);
                }}>
                    {({values}) => (
                        <Form>
                            <div className={'form'}>
                                <div className={'input-fields-wrapper'}>
                                    <FormikInput className={'input-field'} name={'name'} placeholder={'Enter meditation name'} type={'text'} label={'Name'}/>
                                    <FormikInput className={'input-field'} name={'description'} placeholder={'Enter meditation name'} type={'text'} label={'Description'}/>
                                </div>
                                <h4 className={'radio-group-title'} id={"radio-group"}>Choose meditation daytime</h4>
                                <div role={"group"} aria-labelledby={"radio-group"} className={'radio-wrapper'}>
                                    <label>
                                        <Field checked={'checked'} type={"radio"} name={"picked"} value={'1'}/>
                                        Morning
                                    </label>
                                    <label>
                                        <Field type={"radio"} name={"picked"} value={'2'}/>
                                        Afternoon
                                    </label>
                                    <label>
                                        <Field type={"radio"} name={"picked"} value={'3'}/>
                                        Evening
                                    </label>
                                </div>
                                <button type={'submit'} className={'modal-add-btn'}>Add</button>
                                <button type={'button'} className={'modal-cancel-btn'} onClick={() => {props.modalValue(false)}}>Cancel</button>
                            </div>
                            {!!(cardData.daytime = values.picked || '1')}
                        </Form>
                    )}
                </Formik>
            </React.Fragment>
        </StyledModalContent>
    )
}

export default AddModalContent;