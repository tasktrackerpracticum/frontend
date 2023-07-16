import { PROJECTS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getProjects = () => {
  const token = localStorage.getItem('accessToken');
  return request(PROJECTS_API, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
