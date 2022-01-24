import styled from '@emotion/styled';
import backspace from '../../images/backspace.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Title = styled.p`
  margin-left: 18px;
  font-size: 12px;
  color: var(--text-color-2);
`;

export const ImageMobile = styled.svg`
  background-image: url(${backspace});
  width: 18px;
  height: 12px;
  margin: 21px;
  background-repeat: no-repeat;
  position: absolute;
  left: 22px;
  top: 21px;
`;

export const Image = styled.svg`
  background-image: url(${backspace});
  width: 18px;
  height: 12px;
  background-repeat: no-repeat;
  margin-right: 18px;
`;
