import uuid from 'react-uuid';

const baseUrl = 'http://localhost:8000';

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5NTM3OTY5LCJpYXQiOjE2ODk0NTE1NjksImp0aSI6ImI0ZjZlOTk0NTU4NzQyYjdhYzczN2EwZTY5MDRiMjY5IiwidXNlcl9pZCI6MX0.hWrQ61EnJnPmwpQXHl1AxKm-b7n4LYKotHoaHsTzq2U';

export const RESET_PASSWORD_API = `${baseUrl}/users/reset_password/`;
// ------/token
export const TOKEN_CREATE_API = `${baseUrl}/jwt/create/`;
// ------/auth
export const REGISTER_API = `${baseUrl}/auth/register`; //Посмотреть в swgger
export const LOGIN_API = `${baseUrl}/auth/login`; //Посмотреть в swgger
export const LOGOUT_API = `${baseUrl}/auth/logout`; //Посмотреть в swgger
// ------/user
export const USER_API = `${baseUrl}/auth/user`; //Посмотреть в swgger
// ------/organizations
export const ORGANIZATIONS_API = `${baseUrl}/organizations/`;
// ------/projects
export const PROJECTS_API = `${baseUrl}/projects/`;
// ------/tasks
export const TASKS_API = `${baseUrl}/tasks/`;

// ------/роуты
export const SIGN_IN = '/sign-in';
export const SIGN_UP = '/sign-up';
export const FORGOT_PASSWORD = '/forgot-password';
// ------/текст
export const USER_IS_NOT_EXIST =
  'Извините, но такойго пользователя нет в нашей базе. Попробуйте ввести свой email ещё раз';
// ------/ссылки для бокового меню
export const items = [
  { value: 'Создать проект', href: '/' },
  { value: 'Мои проекты', href: '/profile' },
  { value: 'Мои задачи', href: '/project' },
  { value: 'Мои отчеты', href: '/task' },
];

// ------/ссылки для для досок задач
export const projectContainers = [
  { value: 'Беклог', index: uuid() },
  { value: 'В работе', index: uuid() },
  { value: 'Тестирование', index: uuid() },
  { value: 'Завершено', index: uuid() },
];
