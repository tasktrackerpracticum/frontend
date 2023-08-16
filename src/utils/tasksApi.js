import { TASKS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getTasks = (project_id) => {
  const token = localStorage.getItem('accessToken');
  return request(`${TASKS_API}?project_id=${project_id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
