import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from 'react-responsive';
import { logOut } from "../../redux/auth/authOperations"
import { getUsermail } from "../../redux/auth/authSelectors";

import logoutIcon from '../../images/logoutIcon.svg'
import {
    Container, Avatar, Name, Button, LogoutIcon
} from "./UserMenu.styled.jsx";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUsermail);

    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isDesktop, isTablet, isMobile };

    return (
        <Container>
            <Avatar><span>U</span></Avatar>
            <Name matches={matches}>{email}</Name>
            {isMobile &&
                <Button matches={matches} type="button" onClick={() => dispatch(logOut())}>
                    <LogoutIcon src={logoutIcon} alt="Иконка выхода" />
                </Button>
            }
            {(isTablet || isDesktop) && <Button matches={matches} type="button" onClick={() => dispatch(logOut())}>Выйти</Button>}
        </Container>
    )
}