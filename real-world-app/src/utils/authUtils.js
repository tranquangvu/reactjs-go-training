export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

export const setUserToLocalStorage = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
};

export const getAuthTokenFromLocalStorage = () => {
  const user = getUserFromLocalStorage();

  return user?.token;
};
