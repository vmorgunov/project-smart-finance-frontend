import styled from '@emotion/styled';

const heightCosts =
  document.documentElement.clientHeight - 584 < 250
    ? 250
    : document.documentElement.clientHeight - 584;
const heightAll =
  document.documentElement.clientHeight - 381 < 250
    ? 250
    : document.documentElement.clientHeight - 381;

export const TransactioDetailsWrrap = styled.div`
  width: ${({ matches }) =>
    matches.isMobile
      ? '282px'
      : matches.isTablet
      ? '620px'
      : matches.isDesctop && '760px'};
  height: ${({ matches, transactionType }) =>
    matches.isMobile
      ? transactionType !== 'all'
        ? `${heightCosts}px`
        : `${heightAll}px`
      : '385px'};

  border-radius: ${({ matches }) =>
    matches.isMobile ? '0px' : '20px 20px 0 0'};

  overflow: hidden;
`;

export const TransactioInfoWrrap = styled.div`
  display: flex;
  justify-content: ${({ matches }) =>
    matches.isTablet
      ? 'flex-start'
      : matches.isDesctop
      ? 'space-around'
      : 'center'};
  flex-direction: ${({ matches }) =>
    matches.isTablet ? 'column' : matches.isDesctop ? 'row' : 'column'};
`;

export const Summary = styled.div`
  width: 230px;
  height: 270px;

  margin: ${({ matches }) => (matches.isTablet ? '40px 0 0 30px' : '0')};
`;
