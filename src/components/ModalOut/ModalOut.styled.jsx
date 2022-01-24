import styled from '@emotion/styled';
import close from '../../images/close.svg'

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 194px;
  border-radius: 30px;
  background-color: var(--bg-text-color);
  box-shadow: 10px 10px 30px var(--text-color-1);
`;

export const ContainerMobile = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;  
  width: 310px;
  height: 154px;
  border-radius: 30px;
  background-color: var(--bg-text-color);
  box-shadow: 10px 10px 30px var(--text-color-1);
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  background-color: inherit;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 0.1s ease-out;
  &:hover {
    border: 2px solid var(--acent-color);
  }  
`;

export const Title = styled.h2`
  padding: 0 0 20px;  
  font-weight: 500;
  font-size: 14px;
  line-height: 16, 41px;
  font-family: Roboto;
  letter-spacing: 0.02em;
  color: var(--text-color-3);
`;

export const ButtonBox = styled.div`
display: flex;
justify-content: space-between;
margin: 0;
`;

export const Button = styled.button`
  margin: 0 7.5px;
  width: 125px;
  height: 44px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;
  border: 2px solid #f5f6fb;
  transition: 0.2s ease-out;
  background-color: transparent;

  &:hover {
    border: none;
    transition: 0.2s ease-out;
    color: var(--bg-color);
    background-color: var(--acent-color);
  }
`;

export const ButtonMobile = styled.button`
  margin: 0 7.5px;
  width: 100px;
  height: 36px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 13px;
  border: 2px solid #f5f6fb;
  transition: all 0.2s ease-out;
  background-color: transparent;

  &:hover {
    border: none;
    transition: 0.2s ease-out;

    color: var(--bg-color);
    background-color: var(--acent-color);
  }
`;

