import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AppBar } from './components/AppBar';

import AuthView from './views/AuthView/AuthView.jsx';
import TransactionsView from './views';
import { ReportView } from './views';

import { Container } from './App.styled.jsx';

export const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isDesktop, isTablet, isMobile };

  return (
    <Container matches={matches}>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<AuthView />} />
        <Route exact path="/transaction" element={<TransactionsView />} />
        <Route exact path="/report" element={<ReportView />} />
      </Routes>
    </Container>
  );
};
