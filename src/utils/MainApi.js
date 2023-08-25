import request from './utilsApi';
import { RESET_PASSWORD_API } from '../constatnts/constants';

export const forgotPassword = (email) => request(RESET_PASSWORD_API, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
});
