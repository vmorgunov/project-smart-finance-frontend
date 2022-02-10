import styled from '@emotion/styled';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  background-color: var(--bg-color);

  border-bottom-left-radius: ${({ matches }) =>
    matches.isMobile
      ? '100px'
      : matches.isTablet
      ? '100px'
      : matches.isDesktop && '160px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '320px'
      : matches.isTablet
      ? '768px'
      : matches.isDesktop && '1280px'};
  height: ${({ matches, transactionType }) =>
    matches.isMobile
      ? transactionType === 'all'
        ? '300px'
        : '440px'
      : matches.isTablet
      ? '527px'
      : matches.isDesktop && '527px'};
`;

export const BgImg = styled.img`
  position: absolute;
  right: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
      ? '88px'
      : matches.isDesktop && '0'};
  bottom: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
      ? '64px'
      : matches.isDesktop && '0'};
  height: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
      ? '142px'
      : matches.isDesktop && '194px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
      ? '183px'
      : matches.isDesktop && '1270px'};
  z-index: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
      ? '2'
      : matches.isDesktop && '-1'};
`;

export const TransactionWrrap = styled.div`
  width: ${({ matches }) =>
    matches.isTablet ? '665px' : matches.isDesktop && '1060px'};
`;
