import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Backdrop,
  Container,
  ContainerMobile,
  CloseButton,
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
          <CloseButton type="button" onClick={onClose} />
          <Title>{title}</Title>
          <ButtonBox>
            <ButtonMobile type="button" onClick={onAgree}>Да</ButtonMobile>
            <ButtonMobile type="button" onClick={onClose}>Нет</ButtonMobile>
          </ButtonBox>
        </ContainerMobile>}
      {isTabletOrDesktop &&
        <Container>
          <CloseButton type="button" onClick={onClose} />
          <Title>{title}</Title>
          <ButtonBox>
            <Button type="button" onClick={onAgree}>Да</Button>
            <Button type="button" onClick={onClose}>Нет</Button>
          </ButtonBox>
        </Container>}
    </Backdrop>, modalRoot);
}
