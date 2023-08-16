import { TOKEN_CREATE_API } from '../constatnts/constants';
import request from './utilsApi';

export const getToken = (email, password) => {
  return request(TOKEN_CREATE_API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};
