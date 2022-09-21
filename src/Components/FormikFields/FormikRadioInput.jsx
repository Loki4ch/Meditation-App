import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useField} from "formik";

const StyledFormikRadioInput = styled.div`
`
const FormikRadioInput = (props) => {
    const [field, meta, helpers] = useField(props.name);

    const isChecked = (inputValue, daytime) => {
        if (daytime === inputValue) return true;
    }

    return (
        <StyledFormikRadioInput>
            <label className={'label'} htmlFor={'radio-input'}>{props.label}</label>
            <input id={'radio-input'} className={'input'} checked={isChecked(props.value, props.daytime)} {...field} {...props}/>
        </StyledFormikRadioInput>
    );
}

FormikRadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default FormikRadioInput;