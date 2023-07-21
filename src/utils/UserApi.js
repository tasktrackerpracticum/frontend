import { USER_ME_API } from '../constatnts/constants';
import request from './utilsApi';

export const getUserMe = () => {
  const token = localStorage.getItem('accessToken');
  return request(USER_ME_API, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
