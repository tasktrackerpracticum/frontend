import { USERS_API, PROJECTS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getUsers = () => {
  const token = localStorage.getItem('accessToken');
  return request(USERS_API, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

export const addUserInProject = (data) => {
	const token = localStorage.getItem('accessToken');
	return request(`${PROJECTS_API}project_id=${data.projectId}/users/`, {
		method: 'POST',
		headers: {
      Authorization: 'Bearer ' + token,
			Accept: 'application/json',
      'Content-Type': 'application/json',
    },
		body: JSON.stringify({
			email: data.email,
			role: data.role
		})
	})
}

