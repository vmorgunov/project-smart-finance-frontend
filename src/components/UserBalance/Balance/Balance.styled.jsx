import styled from '@emotion/styled';

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BalanceInput = styled.input`
  width: 125px;
  background-color: inherit;
  margin-left: 20px;
  margin-right: 15px;
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding: 15px 30px 15px 10px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
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
    margin: 0;
  }

  @media (max-width: 468px) {
    margin: 0;
    border-radius: ${props => (!props.typeView ? '22px 0px 0px 22px' : '16px')};
    padding: ${props =>
      !props.typeView ? '15px 19px 15px 17px' : '15px 30px 15px 10px'};
  }
  @media (max-width: 320px) {
    padding: 15px 19px 15px 25px;
  }
`;

export const BalanceConfirm = styled.button`
  padding: 15px 18px;
  border: 2px solid #ffffff;
  background-color: var(--bg-color);
  border-radius: 16px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-right: 205px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-2);
  &:hover {
    border: 2px solid #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    color: white;
    background-color: var(--acent-color);
  }
  @media (max-width: 768px) {
    margin-right: 110px;
  }
  @media (max-width: 468px) {
    display: block;
    margin: 0;
    padding: 15px 19px 15px 17px;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0px 22px 22px 0px;
  }
`;

export const BalanceSet = styled.button`
  padding: 15px 18px;
  border: 2px solid #ffffff;
  background-color: var(--bg-color);
  border-radius: 16px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-right: 205px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-2);
  &:hover {
    border: 2px solid #ffffff;
    cursor: unset;
  }
  @media (max-width: 768px) {
    margin-right: 110px;
  }
  @media (max-width: 468px) {
    display: block;
    margin: 0;
    padding: 15px 19px 15px 17px;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0px 22px 22px 0px;
  }
`;

export const LabelWrapper = styled.div`
  @media (max-width: 468px) {
    display: flex;
    margin-bottom: 40px;
  }
`;

export const InputText = styled.span`
  position: absolute;
  top: 57px;
  right: 505px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: var(--text-color);
  @media (max-width: 768px) {
    top: 57px;
    right: 410px;
  }
  @media (max-width: 320px) {
    top: 72px;
    right: 170px;
  }
`;
