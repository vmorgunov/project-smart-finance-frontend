import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: ${({ matches }) =>
    matches.isMobile
      ? 'column'
      : matches.isTablet
      ? 'column'
      : matches.isDesctop && 'row'};
  justify-content: center;
  align-items: center;

  background: ${({ matches }) =>
    matches.isMobile ? 'transparent ' : 'var(--bg-text-color)'};
  margin-bottom: ${({ matches }) =>
    matches.isMobile
      ? '23px'
      : matches.isTablet
      ? '48px'
      : matches.isDesctop && '59px'};
  padding-top: ${({ matches }) => (matches.isMobile ? '5px' : '0px')};
`;

export const DivCalc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  width: ${({ matches }) => (matches.isMobile ? '60px' : '44px')};

  border: 2px solid
    ${({ matches }) =>
      matches.isMobile ? 'var(--bg-text-color)' : 'var(--bg-color)'};
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left: 0;

  box-sizing: border-box;
`;
export const TransactionValueWrrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-right: ${({ matches }) => (matches.isDesctop ? '27px' : 0)};
  margin-top: ${({ matches }) => (matches.isMobile ? '30px' : 0)};
`;

export const DateWrrap = styled.div`
  width: ${({ matches }) => (matches.isMobile ? '279px' : '104px')};
  height: ${({ matches, type }) =>
    matches.isMobile && type === 'all' ? '98px' : '44px'};

  margin-right: ${({ matches }) =>
    matches.isTablet ? '33px' : matches.isDesctop && '20px'};

  margin-bottom: ${({ matches }) => (matches.isMobile ? '10px' : '0px')};

  padding: ${({ matches }) => (matches.isMobile ? '0 88px 0 88px' : '0')};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const DateSend = styled.div`
  margin-left: 8px;
`;
export const InputWrrapDiv = styled.div`
  display: flex;
  flex-direction: ${({ matches }) => (matches.isMobile ? 'column' : 'row')};
`;

export const ConfirmationWrrapDiv = styled.div`
  margin: ${({ matches }) =>
    matches.isMobile
      ? '51px 0 0 0'
      : matches.isTablet
      ? '30px 0 0 0'
      : matches.isDesctop && '0px'};
`;

export const WrrapFieldForm = styled.div`
  position: relative;
`;

export const WrrapErrorText = styled.p`
  @keyframes myAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }
  animation-name: myAnimation;
  animation-duration: 3000ms;
  animation-fill-mode: forwards;

  font-size: ${({ matches }) =>
    matches.isMobile
      ? '8px'
      : matches.isTablet
      ? '10px'
      : matches.isDesctop && '12px'};
  line-height: 1.17;
  color: var(--accent-color-3);

  position: absolute;
  left: 0;
  top: ${({ matches, label }) =>
    matches.isMobile && label === 'top' ? '-15px' : '48px'};

  min-width: 200px;
`;

export const Currency = styled.span`
  position: absolute;
  right: ${({ matches }) => (matches.isMobile ? '4px' : '0px')};
  top: 15px;

  font-weight: ${({ isToggleColorCurrency }) =>
    isToggleColorCurrency ? 600 : 400};
  font-size: 12px;
  line-height: 1.17;

  color: ${({ isToggleColorCurrency }) =>
    isToggleColorCurrency ? 'var(--text-color-3)' : 'var(--color-placeholder)'};
`;
