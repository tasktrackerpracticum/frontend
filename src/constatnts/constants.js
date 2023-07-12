import uuid from 'react-uuid';

const baseUrl = 'https://'; // Добавить эндпоинт

export const RESET_PASSWORD_API = `${baseUrl}/password-reset`;
// ------/auth
export const REGISTER_API = `${baseUrl}/auth/register`;
export const LOGIN_API = `${baseUrl}/auth/login`;
export const LOGOUT_API = `${baseUrl}/auth/logout`;
// ------/user
export const USER_API = `${baseUrl}/auth/user`;
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
