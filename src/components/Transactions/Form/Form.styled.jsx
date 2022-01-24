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
      ? '0'
      : matches.isTablet
      ? '48px'
      : matches.isDesctop && '59px'};
  padding-top: ${({ matches }) => (matches.isMobile ? '54px' : '0px')};
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
  width: 104px;
  height: 44px;

  margin-right: ${({ matches }) =>
    matches.isTablet ? '33px' : matches.isDesctop && '20px'};

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
      ? '60px 0 40px 0'
      : matches.isTablet
      ? '30px 0 0 0'
      : matches.isDesctop && '0px'};
`;
