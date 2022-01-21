import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

export const FirstText = styled.span`
  display: block;
  width: 230px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export const SecondText = styled.span`
  display: block;
  width: 230px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const foldAnimation = keyframes`
      from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  30%, 30% {
    transform: translate3d(0, -30px, 0);
  }

  50% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0,-4px,0);
  }
  `;

export const Arrow = styled.div`
  position: absolute;
  top: 4%;
  left: 45%;
  margin: 40px auto 10px auto;
  width: 30px;
  height: 50px;
  animation: ${foldAnimation} 1s linear infinite;
`;
export const Span = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 5px solid #ffffff;
  border-right: 5px solid #ffffff;
  transform: rotate(-135deg);
  margin: -16px 0;
`;
