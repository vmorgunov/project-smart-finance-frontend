import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { signup, logIn } from '../../redux/auth/authOperations.js';

import googleIcon from '../../images/googleIcon.svg'
import {
    Container,
    Form,
    Note,
    GoogleButton,
    FormLabel,
    FormInput,
    GoogleIcon,
    ButtonsContainer,
    FormSubmitBtn,
    ErrorValidation
} from './AuthForm.styled.jsx';

const AuthForm = () => {
    const dispatch = useDispatch();
    const [isSignup, setIsSignup] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: 'onBlur' });

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isDesktop, isTablet, isMobile };

    const onFormSubmit = data => {
        userSubmit(data);
        reset();
    }

    const userSubmit = (data) => {
        const { email, password } = data;
        switch (isSignup) {
            case false:
                return dispatch(logIn({ email, password }));
            case true:
                return dispatch(signup({ email, password }));
            default:
                return;
        }
    }

    const handleLogin = () => {
        setIsSignup(false);
    }

    const handleSignup = () => {
        setIsSignup(true);
    }

    return (
        <Container matches={matches}>
            <Note matches={matches}>Вы можете авторизоваться с помощью Google Account:</Note>
            <GoogleButton href='https://project-smart-finance.herokuapp.com/api/v1/auth/google'>
                <GoogleIcon src={googleIcon} />Google
            </GoogleButton>
            <Note matches={matches}>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</Note>

            <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete='off'>
                <FormLabel matches={matches}>
                    {errors?.email && <span>*</span>}Электронная почта:
                    <FormInput matches={matches} placeholder="your@email.com" type="email"
                        {...register('email', {
                            required: 'это обязательное поле'
                        })}
                    />
                </FormLabel>
                <ErrorValidation>{errors?.email && <p>{errors?.email.message || 'Error'}</p>}</ErrorValidation>

                <FormLabel matches={matches}>
                    {errors?.password && <span>*</span>}Пароль:
                    <FormInput matches={matches} placeholder="Пароль" type="password"
                        {...register('password', {
                            required: 'это обязательное поле',
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            }
                        })}
                    />
                </FormLabel>
                <ErrorValidation>{errors?.password && <p>{errors?.password.message || 'Error'}</p>}</ErrorValidation>

                <ButtonsContainer>
                    <FormSubmitBtn type="submit" onClick={handleLogin}>Войти</FormSubmitBtn>
                    <FormSubmitBtn type="submit" onClick={handleSignup}>Регистрация</FormSubmitBtn>
                </ButtonsContainer>
            </Form>
        </Container>
    )
};

export default AuthForm;