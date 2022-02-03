import styled from '@emotion/styled';
import backspace from '../../images/backspace.svg';

export const Container = styled.div`
  margin: 15px 0 10px;
  display: flex;
  @media (min-width: 768px) {
    margin: 0px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;
export const Title = styled.p`
  margin-left: 15px;
  font-size: 12px;
  color: var(--text-color-2);
`;

export const Image = styled.svg`
  background-image: url(${backspace});
  width: 18px;
  height: 12px;
  background-repeat: no-repeat;
`;
