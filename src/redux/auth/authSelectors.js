export const selectIsLogin = state => Boolean(state.auth.token);
export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.name;
export const selectError = state => state.auth.error;
