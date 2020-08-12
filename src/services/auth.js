import { post, get } from '../services/requests';

export const fetchSignup = (username, password) => {
  return post('/api/v1/auth/signup', { username, password });
};

export const fetchLogin = (username, password) => {
  return post('/api/v1/auth/login', { username, password });
};

export const fetchLogout = () => {
  return get('/api/v1/auth/logout');
};

export const fetchVerify = () => {
  return get('/api/v1/auth/verify');
};
