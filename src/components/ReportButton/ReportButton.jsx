import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Navigation/Navigation';
import { Title, Image, Container, ImageMobile } from './ReportButton.styled';                
                    
export const ReportButton = () => {   
const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
const isMobile = useMediaQuery({minWidth: 320, maxWidth: 767 })
  return (
      <Navigation router="/transaction">
          <Container>
        {isMobile && <ImageMobile/> }
        {isTabletOrDesktop &&
          <>
          <Image />
          <Title>
            Вернутся на главную
          </Title>
          </>}
          </Container >
      </Navigation>     
    );
};
    