import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Formik} from "formik";
import FormikInput from "../../Components/FormikFields/FormikInput.jsx";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../../store/userSlice.js";

const StyledLoginPage = styled.div`
  background-color: ${props => props.theme.partBackgroundTheme};
`

const LoginPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialFormValues = {
        login: '',
        password: ''
    }

    return (
        <StyledLoginPage>
            <Formik initialValues={initialFormValues} onSubmit={(formValues) => {
                console.log('form values', formValues);
                console.log('dispatch');
                dispatch(userLoggedIn({id: formValues.password, name: formValues.login}));
                navigate('/home');
                }
            }
                    validate={(formValues) => {
                        console.log('validate');
                let isValid = true;
                const errors = {};

                if (!formValues.login) {
                    isValid = false;
                    errors.login = 'Login is mandatory';
                }

                if (!formValues.password) {
                    isValid = false;
                    errors.password = 'Password is mandatory';
                }

                if (!isValid) return errors;
            }}>
                <Form>
                    <FormikInput name={'login'} placeholder={'Enter login'} type={'email'} label={'Email:'}/>
                    <FormikInput name={'password'} placeholder={'Enter password'} type={'password'} label={'Password:'}/>
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
