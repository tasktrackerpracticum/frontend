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

export const setUser = (data) => {
	const token = localStorage.getItem('accessToken');
	return fetch(USER_ME_API, {
		method: 'PATCH',
		headers: {
      Authorization: 'Bearer ' + token,
			Accept: 'application/json',
      'Content-Type': 'application/json',
    },
		body: JSON.stringify({
			username: data.username,
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			phone: data.phone,
			photo: data.photo,
			position: data.position,
			date_of_birth: data.date_of_birth,
			gender: data.gender,
			country: data.country,
			timezone: data.timezone,
			last_login: data.last_login,
			telegram: data.telegram
		})
	})
}

export const updateAvatar = (data) => {
	const token = localStorage.getItem('accessToken');
	return fetch(USER_ME_API, {
		method: 'PATCH',
		headers: {
      Authorization: 'Bearer ' + token,
			Accept: 'application/json',
      'Content-Type': 'application/json',
    },
		body: JSON.stringify({
			email: data.email,
			photo: data.photo,

		})
	})
}
