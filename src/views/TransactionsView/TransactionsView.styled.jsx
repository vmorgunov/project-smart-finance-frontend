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
  height: ${({ matches }) =>
    matches.isMobile
      ? '425px'
      : matches.isTablet
        ? '526px'
        : matches.isDesktop && '526px'};
`;
export const TransactionWrrap = styled.div`
  /* для таблицы */
  /* display: flex;
    flex-direction: ${({ matches }) =>
    matches.isTablet ? 'row' : matches.isDesktop && 'column'};
    justify-content: center; */
  width: ${({ matches }) =>
    matches.isTablet ? '665px' : matches.isDesktop && '1060px'};
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
  z-index: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
        ? '2'
        : matches.isDesktop && '-1'};
  height: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
        ? '142px'
        : matches.isDesktop && '232px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
        ? '183px'
        : matches.isDesktop && '1334px'};
`;