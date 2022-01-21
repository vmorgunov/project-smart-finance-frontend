const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsermail = state => state.auth.user.email;

export { getIsLoggedIn, getUsermail };
