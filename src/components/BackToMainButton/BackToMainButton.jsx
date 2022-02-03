import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Navigation/Navigation';
import { Title, Image, Container } from './BackToMainButton.styled';

export const BackToMainButton = () => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <Navigation router="/transaction">
      <Container>
        <Image />
        {isTabletOrDesktop && <Title>Вернутся на главную</Title>}
      </Container>
    </Navigation>
  );
};
