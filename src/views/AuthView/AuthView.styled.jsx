import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ matches }) =>
    matches.isMobile
      ? '86px 10px 76px 10px'
      : matches.isTablet
      ? '90px 166px 192px 166px'
      : matches.isDesktop && '117px 110px 142px 230px'};
  display: flex;
  flex-direction: ${({ matches }) =>
    matches.isMobile
      ? 'column'
      : matches.isTablet
      ? 'column'
      : matches.isDesktop && 'row'};
  position: relative;
`;

export const TitlesContainer = styled.div`
  margin-left: ${({ matches }) =>
    matches.isMobile
      ? '39px'
      : matches.isTablet
      ? '5px'
      : matches.isDesktop && '0'};
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 900;
  font-size: ${({ matches }) =>
    matches.isMobile
      ? '39.5px'
      : matches.isTablet
      ? '66px'
      : matches.isDesktop && '83px'};
  line-height: 1.176;
  width: ${({ matches }) =>
    matches.isMobile
      ? '183px'
      : matches.isTablet
      ? '307px'
      : matches.isDesktop && '377px'};
  margin: ${({ matches }) =>
    matches.isMobile
      ? '0 0 5px 0'
      : matches.isTablet
      ? '0 0 4px 0'
      : matches.isDesktop && '191px 0 0 0'};
  &::before {
    content: '';
    display: block;
    background-color: #000;
    height: ${({ matches }) =>
      matches.isMobile
        ? '6.5px'
        : matches.isTablet
        ? '11px'
        : matches.isDesktop && '13px'};
    width: ${({ matches }) =>
      matches.isMobile
        ? '4px'
        : matches.isTablet
        ? '7px'
        : matches.isDesktop && '8px'};
    position: absolute;
    top: ${({ matches }) =>
      matches.isMobile
        ? '10px'
        : matches.isTablet
        ? '18px'
        : matches.isDesktop && '22px'};
    right: ${({ matches }) =>
      matches.isMobile
        ? '69px'
        : matches.isTablet
        ? '117px'
        : matches.isDesktop && '140px'};
  }
  &::after {
    content: '';
    display: block;
    background-color: #000;
    height: ${({ matches }) =>
      matches.isMobile
        ? '6.5px'
        : matches.isTablet
        ? '11px'
        : matches.isDesktop && '13px'};
    width: ${({ matches }) =>
      matches.isMobile
        ? '4px'
        : matches.isTablet
        ? '7px'
        : matches.isDesktop && '8px'};
    position: absolute;
    bottom: ${({ matches }) =>
      matches.isMobile
        ? '6px'
        : matches.isTablet
        ? '8px'
        : matches.isDesktop && '10px'};
    right: ${({ matches }) =>
      matches.isMobile
        ? '69px'
        : matches.isTablet
        ? '117px'
        : matches.isDesktop && '140px'};
  }
`;

export const UnderTitle = styled.h2`
  margin-left: ${({ matches }) =>
    matches.isMobile
      ? '11px'
      : matches.isTablet
      ? '19px'
      : matches.isDesktop && '72px'};
  font-weight: 700;
  font-size: ${({ matches }) =>
    matches.isMobile
      ? '13px'
      : matches.isTablet
      ? '16px'
      : matches.isDesktop && '16px'};
  line-height: ${({ matches }) =>
    matches.isMobile
      ? '15px'
      : matches.isTablet
      ? '19px'
      : matches.isDesktop && '19px'};
  letter-spacing: ${({ matches }) =>
    matches.isMobile
      ? '0.15em'
      : matches.isTablet
      ? '0.18em'
      : matches.isDesktop && '0.18em'};
  text-transform: uppercase;
  color: #52555f;
`;

export const Background = styled.div`
  position: absolute;
  height: ${({ matches }) =>
    matches.isMobile
      ? '286px'
      : matches.isTablet
      ? '526px'
      : matches.isDesktop && '526px'};
  max-width: ${({ matches }) =>
    matches.isMobile
      ? '320px'
      : matches.isTablet
      ? '768px'
      : matches.isDesktop && '1280px'};
  background-color: #f5f6fb;
  border-bottom-left-radius: 100px;
  z-index: -1;
  overflow: hidden;
`;

export const BgImg = styled.img`
  height: ${({ matches }) =>
    matches.isMobile
      ? '89px'
      : matches.isTablet
      ? '232px'
      : matches.isDesktop && '232px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '49px'
      : matches.isTablet
      ? '1334px'
      : matches.isDesktop && '1334px'};
  margin: ${({ matches }) =>
    matches.isMobile
      ? '104px 0 0 271px'
      : matches.isTablet
      ? '28px 0 0 10px'
      : matches.isDesktop && '26px 0 0 10px'};
`;

export const CabagesIcon = styled.img`
  position: absolute;
  height: ${({ matches }) =>
    matches.isMobile
      ? '89px'
      : matches.isTablet
      ? '142px'
      : matches.isDesktop && '142px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '83px'
      : matches.isTablet
      ? '183px'
      : matches.isDesktop && '183px'};
  left: ${({ matches }) =>
    matches.isMobile
      ? '35px'
      : matches.isTablet
      ? '103px'
      : matches.isDesktop && '230px'};
  bottom: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
      ? '56px'
      : matches.isDesktop && '50px'};
  z-index: ${({ matches }) =>
    matches.isMobile
      ? '-1'
      : matches.isTablet
      ? '1'
      : matches.isDesktop && '1'};
`;
