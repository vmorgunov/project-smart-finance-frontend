import styled from '@emotion/styled';
//регулируем высоту для мобильной версии
const heightCosts =
  document.documentElement.clientHeight - 638 < 250
    ? 200
    : document.documentElement.clientHeight - 638;
const heightAll =
  document.documentElement.clientHeight - 390 < 250
    ? 200
    : document.documentElement.clientHeight - 390;

export const List = styled.ul`
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;

  margin: ${({ matches }) => (matches.isMobile ? '8px 0 0 0' : '0px')};

  width: ${({ matches }) =>
    matches.isMobile
      ? '282px'
      : matches.isTablet
      ? '620px'
      : matches.isDesctop && '760px'};

  height: ${({ matches, type }) =>
    matches.isMobile
      ? type !== 'all'
        ? `${heightCosts}px`
        : `${heightAll}px`
      : matches.isTablet
      ? '346px'
      : matches.isDesctop && '344px'};
`;

export const Item = styled.li`
  height: ${({ matches }) => (matches.isMobile ? '50px' : '40px')};
  border-bottom: 1px solid var(--bg-color);
  white-space: nowrap;

  padding: ${({ matches }) => (matches.isMobile ? '10px 0' : '0')};

  color: var(--text-color-3);

  display: flex;
`;

export const DescrDateWrrap = styled.div`
  width: ${({ matches }) =>
    matches.isMobile
      ? '54px'
      : matches.isTablet
      ? '251px'
      : matches.isDesctop && '308px'};

  display: flex;
  flex-direction: ${({ matches }) =>
    matches.isMobile ? 'column' : 'row-reverse'};
`;

export const DescrWrrap = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  font-weight: ${({ matches }) => (matches.isMobile ? 'bold' : 'normal')};
  font-size: 12px;
  line-height: 1.17;

  width: ${({ matches }) =>
    matches.isMobile
      ? '54px'
      : matches.isTablet
      ? '165px'
      : matches.isDesctop && '204px'};

  padding: ${({ matches }) => (matches.isMobile ? '0px' : '0 0 0 20px')};
`;
export const DateWrrap = styled.div`
  display: flex;
  align-items: center;

  font-weight: normal;
  font-size: ${({ matches }) => (matches.isMobile ? '8px' : '12px')};
  line-height: ${({ matches }) => (matches.isMobile ? '1.13' : '1.17')};

  width: ${({ matches }) =>
    matches.isMobile
      ? '54px'
      : matches.isTablet
      ? '84px'
      : matches.isDesctop && '104px'};

  margin-top: ${({ matches }) => (matches.isMobile ? '6px' : '0')};
  padding: ${({ matches }) => (matches.isMobile ? '0px' : '0 0 0 20px')};
`;

export const CategoryWrrap = styled.div`
  font-weight: normal;
  font-size: ${({ matches }) => (matches.isMobile ? '8px' : '12px')};
  line-height: ${({ matches }) => (matches.isMobile ? '1.13' : '1.17')};

  display: flex;
  align-items: ${({ matches }) => (matches.isMobile ? 'flex-end' : 'center')};
  justify-content: ${({ matches }) =>
    matches.isMobile ? 'flex-end' : 'center'};

  width: ${({ matches }) =>
    matches.isMobile
      ? '102px'
      : matches.isTablet
      ? '172px'
      : matches.isDesctop && '203px'};
  padding: ${({ matches }) => (matches.isMobile ? '0 10px' : '0px')};
`;

export const SumWrrap = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ colorTextSum }) => colorTextSum};

  width: ${({ matches }) =>
    matches.isMobile
      ? '90px'
      : matches.isTablet
      ? '87px'
      : matches.isDesctop && '110px'};

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ImgDelWrrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  border-radius: 50%;

  margin: ${({ matches }) =>
    matches.isMobile
      ? '0 0 0 12px'
      : matches.isTablet
      ? '8px 0 0 48px'
      : matches.isDesctop && '8px 0 0 68px'};
  cursor: pointer;

  &:hover {
    background: var(--bg-color);
  }
`;

export const ImgDel = styled.img`
  width: 18px;
  height: 18px;
`;
