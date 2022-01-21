import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AppBar } from './components/AppBar';

import AuthView from './views/AuthView';
import TransactionsView from './views/TransactionsView';
import ReportView from './views/ReportView';

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
        <Route path="/" element={<AuthView />} />
        <Route path="/transaction" element={<TransactionsView />} />
        <Route path="/report" element={<ReportView />} />
      </Routes>
    </Container>
  );
};
