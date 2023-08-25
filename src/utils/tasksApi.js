import { PROJECTS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getTasks = (project_id) => {
  const token = localStorage.getItem('accessToken');
  return request(`${PROJECTS_API}${project_id}/tasks/`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

export const createTask = ({ project_id, data }) => {
  const token = localStorage.getItem('accessToken');
  return request(`${PROJECTS_API}${project_id}/tasks/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        title: data.title,
        description: data.description,
        column: 'backlog',
        status: 'nonurgent',
        deadline: data.deadline,
      },
      project_id,
    ),
  });
};
