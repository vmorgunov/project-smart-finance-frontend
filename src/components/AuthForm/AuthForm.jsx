import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { register, logIn } from '../../redux/auth/authOperations.js';

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
    FormSubmitBtn
} from './AuthForm.styled.jsx';

export const AuthForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isDesktop, isTablet, isMobile };

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        userSubmit(user);
        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const userSubmit = ({ email, password }) => {
        switch (isRegister) {
            case false:
                return dispatch(logIn({ email, password }));
            case true:
                return dispatch(register({ email, password }));
            default:
                return;
        }
    }

    const handleRegister = () => {
        setIsRegister(!isRegister);
    }

    return (
        <Container matches={matches}>
            <Note matches={matches}>Вы можете авторизоваться с помощью Google Account:</Note>
            <GoogleButton>
                <GoogleIcon src={googleIcon} />Google
            </GoogleButton>
            <Note matches={matches}>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</Note>

            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormLabel matches={matches}>
                    Электронная почта:
                    <FormInput matches={matches} placeholder="your@email.com" type="email" name="email" value={email} onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel matches={matches}>
                    Пароль:
                    <FormInput matches={matches} placeholder="Пароль" type="password" name="password" value={password} onChange={handleChange}
                    />
                </FormLabel>

                <ButtonsContainer>
                    <FormSubmitBtn type="submit">Войти</FormSubmitBtn>
                    <FormSubmitBtn type="submit" onClick={handleRegister}>Регистрация</FormSubmitBtn>
                </ButtonsContainer>
            </Form>
        </Container>
    )
};