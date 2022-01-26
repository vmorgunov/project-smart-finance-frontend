import React from "react";
import { useMediaQuery } from 'react-responsive';
import AuthForm from "../../components/AuthForm";

import cabagesIcon from '../../images/twoKapusta.svg';
import cabagesIconMbl from '../../images/cabagesIconMbl.svg';
import cabagesBg from '../../images/mnogoKapusta.svg';
import cabagesBgTblt from '../../images/cabagesBgTblt.svg';
import cabagesBgMbl from '../../images/cabagesBgMbl.svg';

import {
    Container,
    TitlesContainer,
    Title,
    UnderTitle,
    CabagesIcon,
    Background,
    BgImg
} from "./AuthView.styled";

const AuthView = () => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isDesktop, isTablet, isMobile };

    return (<>
        <Background matches={matches}>
            {isMobile && <BgImg matches={matches} src={cabagesBgMbl} alt="Много капусты" />}
            {isTablet && <BgImg matches={matches} src={cabagesBgTblt} alt="Много капусты" />}
            {isDesktop && <BgImg matches={matches} src={cabagesBg} alt="Много капусты" />}
        </Background>
        <Container matches={matches}>
            <TitlesContainer matches={matches}>
                <Title matches={matches}>Kapusta</Title>
                <UnderTitle matches={matches}>Smart Finance</UnderTitle>
            </TitlesContainer>
            <AuthForm />
            {isMobile && <CabagesIcon matches={matches} src={cabagesIconMbl} alt="Капуста" />}
            {(isTablet || isDesktop) && <CabagesIcon matches={matches} src={cabagesIcon} alt="Капуста" />}
        </Container>
    </>
    )
}

export default AuthView;