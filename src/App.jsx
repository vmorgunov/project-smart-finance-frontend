import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/authOperations.js';
import { getIsFetchingCurrent } from './redux/auth/authSelectors.js';
import { AppBar } from './components/AppBar';

import { Container } from './App.styled.jsx';

const AuthView = lazy(() => import('./views/AuthView' /* webpackChunkName: 'AuthView' */));
const TransactionsView = lazy(() => import('./views/TransactionsView' /* webpackChunkName: 'TransactionsView' */));
const ReportView = lazy(() => import('./views/ReportView' /* webpackChunkName: 'ReportView' */));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isDesktop, isTablet, isMobile };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container matches={matches}>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />

          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<AuthView />} />
              <Route path="/transaction" element={<TransactionsView />} />
              <Route path="/report" element={<ReportView />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
};
