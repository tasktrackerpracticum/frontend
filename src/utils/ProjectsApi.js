import { PROJECTS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getProjects = () => {
  const token = localStorage.getItem('accessToken');
  return request(PROJECTS_API, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getProject = (projectId) => {
  const token = localStorage.getItem('accessToken');
  return request(`${PROJECTS_API}${projectId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

export const createProject = (data) => {
  const token = localStorage.getItem('accessToken');


  return request(PROJECTS_API, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      title: data.title,
      description: data.description,
      date_start: data.date_start,
      date_finish: data.date_finish,
      is_active: data.is_active,
      users: data.users
    }),
  });
};

export const updateProject = ({project_id, data}) => {
  const token = localStorage.getItem('accessToken');


  return request(`${PROJECTS_API}${project_id}/`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      title: data.title,
      description: data.description,
      date_start: data.date_start,
      date_finish: data.date_finish,
      is_active: data.is_active,
      users: data.users
    }),
  });
};
