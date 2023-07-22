import { PROJECTS_API, ORGANIZATIONS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getProjects = () => {
  const token = localStorage.getItem('accessToken');
  return request(PROJECTS_API, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

const organization_id = 1;

export const createProject = (data) => {
  const token = localStorage.getItem('accessToken');
  return request(`${ORGANIZATIONS_API}?organization_id=${organization_id}/projects/`, {
		method: "POST",
    headers: {
      Authorization: 'Bearer ' + token,
			Accept: 'application/json',
      'Content-Type': 'application/json',
    },
     body: JSON.stringify({
			title: data.title,
			 date_start: data.date_start,
			 date_finish: data.date_finish,
			is_active: data.is_active,
		 })
  });

};

