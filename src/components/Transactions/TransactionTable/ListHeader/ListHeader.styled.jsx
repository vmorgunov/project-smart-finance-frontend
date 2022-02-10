import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;

  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  font-weight: bold;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color);

  background-color: var(--bg-color);

  width: ${({ matches }) =>
    matches.isMobile
      ? '257px'
      : matches.isTablet
      ? '620px'
      : matches.isDesctop && '760px'};
  height: ${({ matches }) =>
    matches.isMobile
      ? '50px'
      : matches.isTablet
      ? '38px'
      : matches.isDesctop && '40px'};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding-left: 20px;

  width: ${({ widthColumn }) => widthColumn};
  justify-content: ${({ alignColumn }) => alignColumn};
`;
