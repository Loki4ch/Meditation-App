import React from "react";
import styled from 'styled-components';
import {Form, Formik, Field} from "formik";
import FormikInput from "../../../Components/FormikFields/FormikInput.jsx";
import FormikRadioInput from "../../../Components/FormikFields/FormikRadioInput.jsx";
import FormikTextArea from "../../../Components/FormikFields/FormikTextArea.jsx";
import {putMeditation} from "../../../api/meditationsApi.js";
import {editRenderTrigger} from "../Home.jsx";
import {validateForm} from "../../../scripts/validation.js";

const StyledEditModalContent = styled.div`
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

  .modal-apply-btn, .modal-cancel-btn {
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

  .modal-apply-btn:hover,.modal-cancel-btn:hover {
    box-shadow: 0 0 10px white;
    text-shadow: 0 0 10px white;
  }

  .modal-apply-btn:active, .modal-cancel-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }

  .modal-cancel-btn {
    background-color: ${props => props.theme.baseBackgroundColor};
  }
`


const EditModalContent = (props) => {
    const initialFormValues = {
        name: `${props.name}`,
        duration: `${props.duration}`,
        description: `${props.description}`,
        daytime: props.daytime,
    };

    const cardData = {
        id: props.id,
        name: '',
        duration: '',
        description: '',
        daytime: '',
    };

    const editMeditation = (value, setCardsList, cardsList) => {
        console.log('Meditation edited');
        value(false);
        putMeditation(cardData.id,{
            id: cardData.id,
            name: cardData.name,
            duration: cardData.duration,
            description: cardData.description,
            daytime: cardData.daytime
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        console.log('PROPS ID', props.id)
        console.log('PROPS INDEX', props.index);
        let removed = cardsList.splice(props.index, 1, cardData);
        // return setCardsList(cardsList.splice(props.id, 1));
        console.log('AFTER CARDS LIST', cardsList)
        props.setCardsList([...cardsList])
        editRenderTrigger++;
        return setCardsList(cardsList);
    };

    const defaultDaytimeCheck = (pickedDaytime) => {
        if (pickedDaytime) {
            cardData.daytime = pickedDaytime;
        } else return cardData.daytime = initialFormValues.daytime;
    }

    return (
        <StyledEditModalContent>
            <>
                <div className={'modal-title-wrapper'}>
                    <p className={'modal-title'}>Editing Meditation</p>
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
                    if (!formValues.duration) {
                        isValid = false;
                        errors.login = 'Duration is mandatory';
                    }
                    if (!isValid) return errors;
                }}
                 onSubmit={(formValues) => {
                    cardData.name = formValues.name;
                    cardData.duration = formValues.duration;
                    cardData.description = formValues.description;
                    editMeditation(props.modalValue, props.setCardsList, props.cardsList);
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
                                    {!!(defaultDaytimeCheck(values.picked))}
                                    <label className={'radio-label'}>
                                        <FormikRadioInput className={'radio-input-field'} name={'picked'} type={"radio"} value={'morning'} daytime={cardData.daytime}/>
                                        <span className={'span'}></span>
                                        morning
                                    </label>
                                    <label className={'radio-label'}>
                                        <FormikRadioInput className={'radio-input-field'} name={'picked'} type={"radio"} value={'afternoon'} daytime={cardData.daytime}/>
                                        afternoon
                                    </label>
                                    <label className={'radio-label'}>
                                        <FormikRadioInput className={'radio-input-field'} name={'picked'} type={"radio"} value={'evening'} daytime={cardData.daytime}/>
                                        evening
                                    </label>
                                </div>
                                {!!(defaultDaytimeCheck(values.picked))}
                                <div className={'btn-wrapper'}>
                                    <button type={'submit'} className={'modal-apply-btn'}>Apply</button>
                                    <button type={'button'} className={'modal-cancel-btn'} onClick={() => {props.modalValue(false)}}>Cancel</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        </StyledEditModalContent>
    )
}

export default EditModalContent;