import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--bg-color);
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    color: var(--text-color-1);
  }
`;

export const Name = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color-1);
  padding-right: 20px;
  align-items: center;
  border-right: 2px solid var(--color-placeholder);
  height: 36px;
  display: ${({ matches }) =>
    matches.isMobile
      ? 'none'
      : matches.isTablet
      ? 'flex'
      : matches.isDesktop && 'flex'};
`;

export const Button = styled.button`
  border: none;
  padding: ${({ matches }) =>
    matches.isMobile
      ? '12px 5px 12px 5px'
      : matches.isTablet
      ? '11px 20px 11px 20px'
      : matches.isDesktop && '11px 20px 11px 20px'};
  background-color: transparent;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color-1);
  text-decoration-line: underline;
`;

export const LogoutIcon = styled.img`
  height: 16px;
  width: 16px;
`;
