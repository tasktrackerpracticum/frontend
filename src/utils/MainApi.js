import request from './utilsApi';
import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API } from '../constatnts/constants';

export const register = (email, password, name) => request(REGISTER_API, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
});

export const login = (email, password) => request(LOGIN_API, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
});

export const forgotPassword = (email) => request(RESET_PASSWORD_API, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
});
