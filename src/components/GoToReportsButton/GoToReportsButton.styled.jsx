import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BalanceNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 30px 0 40px;
  font-size: 12px;
  color: var(--text-color-2);

  @media (min-width: 768px) {
    display: inline-flex;
    padding: 0;
  }
`;

export const ImgReport = styled.img`
  display: inline-block;
  margin-left: 15px;
`;
