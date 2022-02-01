import styled from '@emotion/styled';
import { Text } from 'common/Text/Text.styled';

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: inline-flex;
    flex-direction: row;
    margin-left: ${props => (props.typeView !== 'report' ? '80px' : '0')};
  }
  @media (min-width: 1280px) {
    margin-left: ${props => (props.typeView !== 'report' ? '380px' : '0')};
  }
`;

export const BalanceText = styled(Text)`
  color: var(--text-color-2);
  font-size: 12px;
  @media (min-width: 768px) {
    margin-right: 21px;
  }
`;

export const LabelWrapper = styled.div`
  @media (max-width: 767px) {
    margin-top: 6px;
    display: flex;
  }
`;

export const BalanceInput = styled.input`
  padding: 15px 10px;
  width: 125px;
  background-color: inherit;
  border-radius: ${props =>
    props.typeView !== 'report' ? '22px 0px 0px 22px' : '22px'};
  border: 2px solid #ffffff;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-color);
  cursor: pointer;
  &::placeholder {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: var(--text-color);
  }
  &:focus::placeholder {
    color: transparent;
    transition: text-indent 0.3s ease;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: 768px) {
    margin-right: ${props => (props.typeView !== 'report' ? '15px' : '0')};
    border-radius: 16px;
  }
`;

export const BalanceConfirm = styled.button`
  padding: 15px 18px;
  border: 2px solid #ffffff;
  background-color: var(--bg-color);
  border-radius: 16px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    border: 2px solid #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    color: white;
    background-color: var(--acent-color);
  }

  @media (max-width: 767px) {
    display: block;
    margin: 0;
    padding: 15px 19px 15px 17px;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0px 22px 22px 0px;
  }
`;
