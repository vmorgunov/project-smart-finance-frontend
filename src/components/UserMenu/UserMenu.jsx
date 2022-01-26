import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { logOut } from "../../redux/auth/authOperations"
import { getUsermail } from "../../redux/auth/authSelectors";
import { ModalOut } from '../ModalOut/ModalOut';

import logoutIcon from '../../images/logoutIcon.svg'
import {
    Container, Avatar, Name, Button, LogoutIcon
} from "./UserMenu.styled.jsx";

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUsermail);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isDesktop, isTablet, isMobile };

    return (
        <>
            <Container>
                <Avatar><span>U</span></Avatar>
                <Name matches={matches}>{email}</Name>
                {isMobile &&
                    <Button matches={matches} type="button" onClick={() => setIsModalOpen(true)}>
                        <LogoutIcon src={logoutIcon} alt="Иконка выхода" />
                    </Button>
                }
                {(isTablet || isDesktop) && <Button matches={matches} type="button" onClick={() => setIsModalOpen(true)}>Выйти</Button>}
            </Container>

            {isModalOpen && <ModalOut
                onClose={() => setIsModalOpen(false)}
                onAgree={() => dispatch(logOut())}
                title='Вы действительно хотите выйти?' />}
        </>
    )
}

export default UserMenu;