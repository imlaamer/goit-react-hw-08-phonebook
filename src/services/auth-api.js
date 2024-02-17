import { apiInstance } from './api-common';
import { setToken, clearToken } from './api-common';

export const apiRegisterUser = async ({ name, email, password }) => {
  const { data: user } = await apiInstance.post('/users/signup', {
    name,
    email,
    password,
  });
  setToken(user.token);
  return user;
};

export const apiLoginUser = async ({ email, password }) => {
  const { data: user } = await apiInstance.post('/users/login', {
    email,
    password,
  });
  setToken(user.token);
  return user;
};

export const apiRefreshUser = async token => {
  setToken(token);
  const { data: user } = await apiInstance.get('/users/current');
  return user;
};

export const apiLogoutUser = async () => {
  await apiInstance.post('/users/logout');
  clearToken();
};
