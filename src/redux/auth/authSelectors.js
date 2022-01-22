const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsermail = state => state.auth.user.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;

export { getIsLoggedIn, getUsermail, getIsFetchingCurrent };
