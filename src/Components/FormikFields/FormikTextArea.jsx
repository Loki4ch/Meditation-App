import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Field, useField} from "formik";

const StyledFormikTextArea = styled.div`
    .label {
      font-size: 18px;
    }
`
const FormikTextArea = (props) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <StyledFormikTextArea>
            <label className={'label'}>{props.label}</label>
            <Field as={'textarea'} {...field} {...props}/>        {/* ...field  =  value={} onChange={} onBlur={}  ...props = type={} */}
        </StyledFormikTextArea>
    );
}

FormikTextArea.propTypes = {
    control: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default FormikTextArea;