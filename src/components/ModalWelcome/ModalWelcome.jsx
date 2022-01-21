import React from 'react';
import Modal from 'react-modal';
import { FirstText, SecondText, Arrow, Span } from './ModalWelcome.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'linear-gradient(to left, #11de93, #0e7ad6)',
  },
  content: {
    background: 'linear-gradient(117.84deg, #1D346A 2.84%, #031634 67.28%)',
    borderRadius: '30px',
    boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
    top: '240px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px 30px 30px',

    color: '#FFFFFF',
  },
};

Modal.setAppElement('#modal');

const ModalWelcome = ({ IsOpen }) => {
  const [modalIsOpen, setIsOpen] = React.useState(IsOpen);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {' '}
        <div>
          <Arrow>
            <Span></Span>
          </Arrow>
          <FirstText>
            Привет! Для начала работы внеси текущий баланс своего счета!
          </FirstText>
          <SecondText>
            Ты не можешь тратить деньги пока их у тебя нет :)
          </SecondText>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWelcome;
