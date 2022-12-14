import React from 'react';
import styled from 'styled-components';
import {Form, Formik, Field} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";
import FormikTextArea from "../../../Components/FormikFields/FormikTextArea.jsx";
import FormikRadioInput from "../../../Components/FormikFields/FormikRadioInput.jsx";
import {postMeditation} from "../../../api/meditationsApi.js";
import {validateForm} from "../../../scripts/validation";

const StyledAddModalContent = styled.div`
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
    min-width: 476px;
    height: 150px;
    padding: 10px;
    resize: none;
  }
  
  .input-field:focus, .text-area:focus {
    box-shadow:  0 0 15px white;
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
    cursor: pointer;
    max-width: 130px;
    margin-bottom: 15px;
    display: flex;
    border-radius: 25px;
    font-size: 16px;
  }
  
  .radio-input-field {
    margin-right: 10px;
    //width: 1px;
    //height: 1px;
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
    box-shadow: 0 0 10px white;
    text-shadow: 0 0 10px white;
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
        duration: '',
        description: '',
    };

    const cardData = {
        id: 0,
        name: '',
        duration: '',
        description: '',
        daytime: 'morning',
    };

    const addMeditation = (value, setCardsList, cardsList) => {
        console.log('Meditation added');
        value(false);
        postMeditation({
            id: cardData.id,
            duration: cardData.duration,
            name: cardData.name,
            description: cardData.description,
            daytime: cardData.daytime
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        console.log('Card Id', cardData.id);
        return setCardsList([...cardsList, cardData]);
    };

    const idReturner = () => {
        if (props.cardsList.length) {
            return props.cardsList[props.cardsList.length - 1].id + 1
        } else return 1;
    }

    return (
        <StyledAddModalContent>
            <>
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
                    } else if (!formValues.duration) {
                        isValid = false;
                        errors.login = 'Duration is mandatory';
                    }
                    if (!isValid) return errors;}}
                        onSubmit={(formValues) => {
                    cardData.id = idReturner();                        // JUST LET IT BE SO
                    cardData.name = formValues.name;
                    cardData.duration = formValues.duration;
                    cardData.description = formValues.description;
                    addMeditation(props.modalValue, props.setCardsList, props.cardsList);
                }}>
                    {({values}) => (
                        <Form>
                            <div className={'form'}>
                                <div className={'input-fields-wrapper'}>
                                    <FormikInput className={'input-field'} name={'name'} placeholder={'Enter name...'} type={'text'} label={'Name'}/>
                                    <FormikInput className={'input-field'} name={'duration'} placeholder={'Enter duration...'} type={'text'} label={'Meditation duration (minutes)'}/>
                                    <FormikTextArea className={'text-area'} control={'textarea'} name={'description'} placeholder={'Enter description...'} type={'text'} label={'Description'}/>
                                </div>
                                <p className={'radio-group-title'} id={"radio-group"}>Meditation daytime</p>
                                <div className={'radio-wrapper'}>
                                    <label className={'radio-label'}>
                                        <FormikRadioInput className={'radio-input-field'} name={'picked'} type={"radio"} value={'morning'}/>
                                        morning
                                    </label>
                                    <label className={'radio-label'}>
                                        <FormikRadioInput className={'radio-input-field'} name={'picked'} type={"radio"} value={'afternoon'}/>
                                        afternoon
                                    </label>
                                    <label className={'radio-label'}>
                                        <FormikRadioInput className={'radio-input-field'} name={'picked'} type={"radio"} value={'evening'}/>
                                        evening
                                    </label>
                                </div>
                                <div className={'btn-wrapper'}>
                                    <button type={'submit'} className={'modal-add-btn'}>Add</button>
                                    <button type={'button'} className={'modal-cancel-btn'} onClick={() => {props.modalValue(false)}}>Cancel</button>
                                </div>
                            </div>
                            {!!(cardData.daytime = values.picked || 'morning')}
                        </Form>
                    )}
                </Formik>
            </>
        </StyledAddModalContent>
    )
}

export default AddModalContent;


