import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useField} from "formik";

const StyledFormikInput = styled.div`
  .label {
    font-size: 17px;
  }
`
const FormikInput = (props) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <StyledFormikInput>
            <label className={'label'}>{props.label}</label>
            <input {...field} {...props}/>        {/* ...field  =  value={} onChange={} onBlur={}  ...props = type={} */}
        </StyledFormikInput>
    );
}

FormikInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default FormikInput;