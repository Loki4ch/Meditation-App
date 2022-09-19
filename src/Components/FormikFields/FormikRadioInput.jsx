import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useField} from "formik";

const StyledFormikRadioInput = styled.div`
  //.label {
  //  font-size: 18px;
  //}
`
const FormikRadioInput = (props) => {
    const [field, meta, helpers] = useField(props.name);

    const isChecked = (inputName, daytime) => {
        if (daytime === name) return true;
    }

    return (
        <StyledFormikRadioInput>
            <label className={'label'}>{props.label}</label>
            <input checked={isChecked(props.name, props.daytime)} {...field} {...props}/>
        </StyledFormikRadioInput>
    );
}

FormikRadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default FormikRadioInput;