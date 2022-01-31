import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import UserMenu from '../UserMenu';

import { useTheme } from '../../common/hooks/use-theme';
import MaterialUISwitch from 'components/ThemeSwitcher/ThemeSwitcher';
import logo from '../../images/logo.svg';
import { Container, Logo } from './AppBar.styled.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isDesktop, isTablet, isMobile };
  // MaterialUISwitch
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(true);
  // MaterialUISwitch
  useEffect(() => {
    const isChecked = localStorage.getItem('theme');
    isChecked === 'light' ? setChecked(false) : setChecked(true);
  }, []);
  // MaterialUISwitch
  const handleChange = event => {
    setChecked(event.target.checked);
    !checked === true ? setTheme('dark') : setTheme('light');
    console.log(event.target.checked);
  };

  return (
    <Container matches={matches}>
      <Logo href="/">
        <img src={logo} alt="Логотип" />
      </Logo>
      <MaterialUISwitch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      {isLoggedIn && <UserMenu />}
    </Container>
  );
};

export default AppBar;
