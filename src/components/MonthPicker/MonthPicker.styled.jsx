import styled from '@emotion/styled';

export const MonthContainer = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-size: 12px;
  text-align: center;
  color: var(--text-color-2);
`;

export const Switch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ButtonSwitch = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  background-color: var(--bg-text-color);
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  width: 4px;
  height: 10px;
  &:hover {
    width: 6px;
    height: 12px;
  }
`;

export const SwitchData = styled.span`
  width: 120px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
`;
