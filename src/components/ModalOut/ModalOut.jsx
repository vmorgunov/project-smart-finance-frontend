import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import {
    Backdrop,
    Container,
    ContainerMobile,
    CloseButton,
    CloseIcon,
    Title,
    ButtonBox,
    Button,   
    ButtonMobile   
} from './ModalOut.styled';


const modalRoot = document.querySelector('#modal-root')

export const ModalOut = ({ onClose, onAgree, title }) => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 }); 
  
  
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

 
   const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  
  return createPortal(
      
        <Backdrop onClick={handleBackdropClick}>
      {isMobile &&
        <ContainerMobile>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <Title>{title}</Title>
          <ButtonBox>
            <ButtonMobile type="button" onClick={onAgree}>Yes</ButtonMobile>
            <ButtonMobile type="button" onClick={onClose}>No</ButtonMobile>
          </ButtonBox>
        </ContainerMobile>}
        {isTabletOrDesktop &&
          <Container>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <Title>{title}</Title>
          <ButtonBox>
            <Button type="button" onClick={onAgree}>Yes</Button>
            <Button type="button" onClick={onClose}>No</Button>
          </ButtonBox>
        </Container>}
        </Backdrop>, modalRoot);     
  }
