import { USERS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getUsers = () => {
  const token = localStorage.getItem('accessToken');
  return request(USERS_API, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
