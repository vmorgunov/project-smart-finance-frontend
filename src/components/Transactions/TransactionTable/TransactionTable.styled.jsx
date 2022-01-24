import styled from '@emotion/styled';

export const TableHeader = styled.table`
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  border-collapse: collapse;

  width: ${({ matches }) =>
    matches.isMobile
      ? '257px'
      : matches.isTablet
      ? '620px'
      : matches.isDesctop && '760px'};
`;
export const TableBody = styled.table`
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  border-collapse: collapse;

  width: ${({ matches }) =>
    matches.isMobile
      ? '257px'
      : matches.isTablet
      ? '620px'
      : matches.isDesctop && '760px'};
  height: 384px;
`;

export const Thead = styled.thead`
  font-weight: 900;
  text-transform: uppercase;
  color: var(--text-color);
  background-color: var(--bg-color);
`;

export const Tbody = styled.tbody`
  background-color: var(--bg-text-color);
  color: var(--text-color-3);
  width: 760px;
`;

export const Tr = styled.tr`
  height: 40px;

  border-bottom: 2px solid var(--bg-color);
`;

export const Th = styled.th`
  width: ${({ param }) => (param.width ? param.width : '100%')};
  text-align: ${({ param }) => (param.align ? param.align : 'center')};
  padding-left: 20px;
`;

export const Td = styled.td`
  width: ${({ param }) => (param.width ? param.width : '100%')};
  text-align: ${({ param }) => (param.align ? param.align : 'center')};
  padding-left: 20px;
  color: ${({ colorTextSum }) => colorTextSum};
  font-weight: ${({ colorTextSum }) => (colorTextSum ? 'bold' : 'normal')}; ;
`;

export const ImgDel = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const ImgDelWrrap = styled.div`
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--bg-color);
  }
`;
