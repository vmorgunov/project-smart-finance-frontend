import React from 'react';
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import UserMenu from '../UserMenu';

import logo from '../../images/logo.svg';
import { Container, Logo } from './AppBar.styled.jsx';

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isDesktop, isTablet, isMobile };

    return (
        <Container matches={matches}>
            <Logo href="/">
                <img src={logo} alt="Логотип" />
            </Logo>
            {isLoggedIn && <UserMenu />}
        </Container>
    )
}

export default AppBar;