import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/authOperations.js';
import {
  getIsFetchingCurrent,
  getIsLoggedIn,
} from './redux/auth/authSelectors.js';
import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar';

import { Container } from './App.styled.jsx';

const AuthView = lazy(() =>
  import('./views/AuthView' /* webpackChunkName: 'AuthView' */),
);
const TransactionsView = lazy(() =>
  import('./views/TransactionsView' /* webpackChunkName: 'TransactionsView' */),
);
const ReportView = lazy(() =>
  import('./views/ReportView' /* webpackChunkName: 'ReportView' */),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isDesktop, isTablet, isMobile };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container matches={matches}>
      <AppBar />
      {!isFetchingCurrentUser && (
        <>
          <Suspense fallback={null}>
            <Routes>
              <Route
                path="/"
                element={
                  isLoggedIn ? <Navigate to="/transaction" /> : <AuthView />
                }
              />
              <Route
                path="/transaction"
                element={
                  isLoggedIn ? <TransactionsView /> : <Navigate to="/" />
                }
              />
              <Route
                path="/report"
                element={isLoggedIn ? <ReportView /> : <Navigate to="/" />}
              />
            </Routes>
          </Suspense>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};
