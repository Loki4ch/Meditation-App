import React from 'react';
import styled from 'styled-components';
import {Form, Formik, Field} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";
import FormikTextArea from "../../../Components/FormikFields/FormikTextArea.jsx";

const StyledModalContent = styled.div`
  .modal-title-wrapper {
    text-align: center;
  }

  .modal-title {
    font-size: ${props => props.theme.largeFontSize};
    margin: 15px 0 15px 0;
  }

  .input-fields-wrapper {
    
  }
  
  .input-field, .text-area {
    margin: 5px 0 20px 0;
    padding: 5px 10px 5px 10px;
    display: flex;
    color: black;
    font-size: 17px;
    border: none;
    border-radius: 25px;
    background-color: ${props => props.theme.baseFontColor};
  }

  .text-area {
    width: 100%;
    height: 150px;
    padding: 10px;
    resize: none;
  }
  
  .input-field:focus, .text-area:focus {
    box-shadow:  0 0 12px white;
    outline: none;
    transition: all 0.3s;
  }
  
  .radio-group-title {
    font-size: ${props => props.theme.smallFontSize};
    margin: 25px 0 10px 0;
  }

  .radio-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .radio-label {
    margin-left: 5px;
    margin-bottom: 5px;
  }
  
  .btn-wrapper {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  
  .modal-add-btn, .modal-cancel-btn {
    width: 80px;
    height: 35px;
    margin-left: 10px;
    border: none;
    border-radius: 25px;
    background-color: ${props => props.theme.startBtnColor};
    transition: all 0.3s;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-add-btn:hover,.modal-cancel-btn:hover {
    box-shadow: 1px 3px 10px black;
  }

  .modal-add-btn:active, .modal-cancel-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }

  .modal-cancel-btn {
    background-color: ${props => props.theme.baseBackgroundColor};
  }
`

const AddModalContent = (props) => {
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
                    <p className={'modal-title'}>Creating New Meditation</p>
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
                                    <FormikInput className={'input-field'} name={'name'} placeholder={'Enter meditation name...'} type={'text'} label={'Name'}/>
                                    <FormikTextArea className={'text-area'} control={'textarea'} name={'description'} placeholder={'Enter meditation description...'} type={'text'} label={'Description'}/>
                                </div>
                                <p className={'radio-group-title'} id={"radio-group"}>Meditation daytime</p>
                                <div role={"group"} aria-labelledby={"radio-group"} className={'radio-wrapper'}>
                                    <label className={'radio-label'}>
                                        <Field checked={'checked'} type={"radio"} name={"picked"} value={'1'}/>
                                        morning
                                    </label>
                                    <label className={'radio-label'}>
                                        <Field type={"radio"} name={"picked"} value={'2'}/>
                                        afternoon
                                    </label>
                                    <label className={'radio-label'}>
                                        <Field type={"radio"} name={"picked"} value={'3'}/>
                                        evening
                                    </label>
                                </div>
                                <div className={'btn-wrapper'}>
                                    <button type={'submit'} className={'modal-add-btn'}>Add</button>
                                    <button type={'button'} className={'modal-cancel-btn'} onClick={() => {props.modalValue(false)}}>Cancel</button>
                                </div>
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


