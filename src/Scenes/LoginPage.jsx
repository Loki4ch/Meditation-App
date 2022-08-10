import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Formik} from "formik";
import FormikInput from "../Components/FormikFields/FormikInput.jsx";

const StyledLoginPage = styled.div`
  background-color: ${props => props.theme.partBackgroundTheme};
`

const LoginPage = (props) => {
    return (
        <StyledLoginPage>
            <Formik onSubmit={
                const navigate = useNavigate();
            } validate={(formData) => {
                let isValid = true;
                const errors = {};

                if (!formData) {
                    isValid = false;
                    errors.login = 'Login is mandatory';
                }

                if (!formData) {
                    isValid = false;
                    errors.password = 'Password is mandatory';
                }

                if (!isValid) return errors;
            }}>
                <Form>
                    <FormikInput name={'login'} placeholder={'Enter login'} type={'email'}/>
                    <FormikInput name={'password'} placeholder={'Enter password'} type={'password'}/>
                    <button type={'submit'}>Login</button>
                </Form>
            </Formik>
        </StyledLoginPage>
    );
}

LoginPage.propTypes = {
    // userName: PropTypes.string.isRequired,
};

export default LoginPage;
