import { PROJECTS_API, token } from '../constatnts/constants';
import request from './utilsApi';

export const getProjects = () => {
  return request(PROJECTS_API, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    mode: 'no-cors',
  });
};
