import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Formik} from "formik";
import FormikInput from "../../Components/FormikFields/FormikInput.jsx";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../../store/userSlice.js";

const StyledLoginPage = styled.div`
  background-color: ${props => props.theme.partBackgroundTheme};
`

const LoginPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <StyledLoginPage>
            <Formik initialValues={''} onSubmit={(formValues) => {
                console.log('dispatch');
                dispatch(userLoggedIn({id: formValues.password, name: formValues.login}));
                navigate('/home');
                }
            }
                    validate={(formData) => {
                        console.log('validate');
                let isValid = true;
                const errors = {};

                if (!formData.login) {
                    isValid = false;
                    errors.login = 'Login is mandatory';
                }

                if (!formData.password) {
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
