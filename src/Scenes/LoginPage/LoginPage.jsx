import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Formik} from "formik";
import FormikInput from "../../Components/FormikFields/FormikInput.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../../store/userSlice.js";

const StyledLoginPage = styled.div`
  color: ${props => props.theme.accentBackgroundColor};
  background-color: transparent;
  
  .input-field {
    margin: 10px 10px 20px 10px;
    padding: 10px 14px 10px 14px;
    color: ${props => props.theme.accentBackgroundColor};
    display: flex;
    font-size: 20px;
    border-radius: 25px;
    background: transparent;
    border: 1px  solid ${props => props.theme.accentBackgroundColor};
  }
  
  .input-field:focus {
    box-shadow:  0 0 12px ${props => props.theme.accentBackgroundColor};
    outline: none;
    transition: all 0.3s;
  }
  
  .submit-btn {
    width: 260px;
    height: 46px;
    font-size: 17px;
    margin: 15px 10px 15px 10px;
    border-radius: 25px;
    color: ${props => props.theme.accentBackgroundColor};
    background: linear-gradient(135deg, #fcdf8a 0%,#f38381 100%);
    border: none;
  }

  .submit-btn:hover {
    color: white;
    box-shadow: 0 0 15px white;
    text-shadow: 0 0 10px white;
    transition: all 0.3s;
  }

  .submit-btn:active {
    box-shadow: 0 0 10px ${props => props.theme.accentBackgroundColor};
    transition: all 0.1s;
  }
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
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.login)) {
                    errors.login = 'Invalid email address';
                }
                if (!formValues.password) {
                    isValid = false;
                    errors.password = 'Password is mandatory';
                } else if (formValues.password.length > 8) {
                    isValid = false;
                    errors.login = 'Password too long';
                }
                if (!isValid) return errors;
            }}>
                <Form>
                    <FormikInput className={'input-field'} name={'login'} placeholder={'Enter email...'} type={'email'} label={'Email:'}/>
                    <FormikInput className={'input-field'} name={'password'} placeholder={'Enter password...'} type={'password'} label={'Password:'}/>
                    <button className={'submit-btn'} type={'submit'}>Login</button>
                </Form>
            </Formik>
        </StyledLoginPage>
    );
}

LoginPage.propTypes = {
    // userName: PropTypes.string.isRequired,
};

export default LoginPage;
