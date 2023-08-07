import uuid from 'react-uuid';

const baseUrl = 'https://taksa-tracker.ru';

export const RESET_PASSWORD_API = `${baseUrl}/users/reset_password/`;
// ------/token
export const TOKEN_CREATE_API = `${baseUrl}/jwt/create/`;
// ------/auth
export const REGISTER_API = `${baseUrl}/users/`;
// ------/user
export const USERS_API = `${baseUrl}/api/v1/users`; //Посмотреть в swgger
export const USER_ME_API = `${baseUrl}/api/v1/users/me/`; //Посмотреть в swgger
// ------/organizations
export const ORGANIZATIONS_API = `${baseUrl}/organizations/`;
// ------/projects
export const PROJECTS_API = `${baseUrl}/api/v1/projects/`;
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
  { value: 'Беклог', column: 'backlog', id: uuid() },
  { value: 'В работе', column: 'todo', id: uuid() },
  { value: 'Тестирование', column: 'testing', id: uuid() },
  { value: 'Завершено', column: 'done', id: uuid() },
  { value: 'Удалено', column: 'deleted', id: uuid() },
];

// ------/projects/ удалить после плучения данных с сервера
export const MockProjects = [
  {
    id: '1',
    title: 'Project 1',
    date_start: '11.01.2023',
    date_finish: '11.02.2023',
    is_active: true,
    users: [],
  },
  {
    id: '2',
    title: 'Project 2',
    date_start: '14.06.2023',
    date_finish: '16.08.2023',
    is_active: true,
    users: [],
  },
  {
    id: '3',
    title: 'Project 3',
    date_start: '19.03.2023',
    date_finish: '26.09.2023',
    is_active: true,
    users: [],
  },
];

// ------/tasks/ удалить после плучения данных с сервера
export const MockTasks = [
  {
    title: 'Заполнить базу тестовыми данными',
    description: 'Надо заполнить БД тестовыми данными',
    id: uuid(),
    column: 'backlog',
    users: [
      {
        id: 1,
        first_name: 'Иван',
        last_name: 'Иванов',
        email: 'admin@admin.com',
        phone: '+79223332233',
        photo: null,
      },
    ],
    author: {
      id: 1,
      first_name: 'Иван',
      last_name: 'Иванов',
      email: 'admin@admin.com',
      phone: '+79223332233',
      photo: null,
    },
    status: 'Несрочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Вставить лого из Фигмы',
    description: 'Импортировать логотип',
    id: uuid(),
    column: 'backlog',
    users: [
      {
        id: 10,
        first_name: 'Владислав',
        last_name: 'Владиславович',
        email: 'vlad@admin.com',
        phone: '+79663666663',
        photo: null,
      },
    ],
    author: {
      id: 10,
      first_name: 'Владислав',
      last_name: 'Владиславович',
      email: 'vlad@admin.com',
      phone: '+79113336666',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Редактировать текст',
    description: 'Найти ошибки',
    id: uuid(),
    column: 'backlog',
    users: [
      {
        id: 12,
        first_name: 'Андрей',
        last_name: 'Андреев',
        email: 'andrey@admin.com',
        phone: '+79003330033',
        photo: null,
      },
    ],
    author: {
      id: 11,
      first_name: 'Антон',
      last_name: 'Антонов',
      email: 'anton@admin.com',
      phone: '+79113331100',
      photo: null,
    },
    status: 'Несрочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Редактировать текст',
    description: 'Найти ошибки',
    id: uuid(),
    column: 'backlog',
    users: [
      {
        id: 12,
        first_name: 'Андрей',
        last_name: 'Андреев',
        email: 'andrey@admin.com',
        phone: '+79003330033',
        photo: null,
      },
    ],
    author: {
      id: 11,
      first_name: 'Антон',
      last_name: 'Антонов',
      email: 'anton@admin.com',
      phone: '+79113331100',
      photo: null,
    },
    status: 'Несрочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Вставить лого из Фигмы',
    description: 'Импортировать логотип',
    id: uuid(),
    column: 'backlog',
    users: [
      {
        id: 10,
        first_name: 'Владислав',
        last_name: 'Владиславович',
        email: 'vlad@admin.com',
        phone: '+79663666663',
        photo: null,
      },
    ],
    author: {
      id: 10,
      first_name: 'Владислав',
      last_name: 'Владиславович',
      email: 'vlad@admin.com',
      phone: '+79113336666',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Решить что будем кушать вечером',
    description: 'Надо порешать...',
    id: uuid(),
    column: 'todo',
    users: [
      {
        id: 7,
        first_name: 'Иосиф',
        last_name: 'Джугашвилли',
        email: 'user_5@user.com',
        phone: '+79222233333',
        photo: null,
      },
      {
        id: 8,
        first_name: 'Владимир Ильич',
        last_name: 'Ленин',
        email: 'user_6@user.com',
        phone: '+79883332211',
        photo: null,
      },
      {
        id: 9,
        first_name: 'Сергей',
        last_name: 'Лукьяненко',
        email: 'user_7@user.com',
        phone: '+79887776655',
        photo: null,
      },
    ],
    author: {
      id: 1,
      first_name: 'Иван',
      last_name: 'Иванов',
      email: 'admin@admin.com',
      phone: '+79223332233',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:29:38Z',
    comments: [],
  },
  {
    title:
      'Длинное описание задачи очень-очень длинное описание задачи, соверешенно длинное и не короткое',
    description:
      'Очень длинное длинное длинное длинное длинное длинное длинное длинное длинное длинное',
    id: uuid(),
    column: 'todo',
    users: [
      {
        id: 7,
        first_name: 'Иосиф',
        last_name: 'Джугашвилли',
        email: 'user_5@user.com',
        phone: '+79222233333',
        photo: null,
      },
      {
        id: 8,
        first_name: 'Владимир Ильич',
        last_name: 'Ленин',
        email: 'user_6@user.com',
        phone: '+79883332211',
        photo: null,
      },
      {
        id: 9,
        first_name: 'Сергей',
        last_name: 'Лукьяненко',
        email: 'user_7@user.com',
        phone: '+79887776655',
        photo: null,
      },
    ],
    author: {
      id: 1,
      first_name: 'Иван',
      last_name: 'Иванов',
      email: 'admin@admin.com',
      phone: '+79223332233',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:29:38Z',
    comments: [],
  },
  {
    title: 'Тестировать добавление задач',
    description: 'Протестировать данные в массиве',
    id: uuid(),
    column: 'testing',
    users: [
      {
        id: 10,
        first_name: 'Владислав',
        last_name: 'Владиславович',
        email: 'vlad@admin.com',
        phone: '+79663666663',
        photo: null,
      },
    ],
    author: {
      id: 10,
      first_name: 'Владислав',
      last_name: 'Владиславович',
      email: 'vlad@admin.com',
      phone: '+79113336666',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title:
      'Тестировать задачи очень-очень длинное описание задачи, соверешенно длинное и не короткое',
    description:
      'Очень тестируемое длинное длинное длинное длинное длинное длинное длинное длинное длинное',
    id: uuid(),
    column: 'testing',
    users: [
      {
        id: 7,
        first_name: 'Иосиф',
        last_name: 'Джугашвилли',
        email: 'user_5@user.com',
        phone: '+79222233333',
        photo: null,
      },
      {
        id: 8,
        first_name: 'Владимир Ильич',
        last_name: 'Ленин',
        email: 'user_6@user.com',
        phone: '+79883332211',
        photo: null,
      },
      {
        id: 9,
        first_name: 'Сергей',
        last_name: 'Лукьяненко',
        email: 'user_7@user.com',
        phone: '+79887776655',
        photo: null,
      },
    ],
    author: {
      id: 1,
      first_name: 'Иван',
      last_name: 'Иванов',
      email: 'admin@admin.com',
      phone: '+79223332233',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:29:38Z',
    comments: [],
  },
  {
    title: 'Тестировать приложение',
    description: 'Написать Jest тесты для редюсеров',
    id: uuid(),
    column: 'testing',
    users: [
      {
        id: 10,
        first_name: 'Владислав',
        last_name: 'Владиславович',
        email: 'vlad@admin.com',
        phone: '+79663666663',
        photo: null,
      },
    ],
    author: {
      id: 10,
      first_name: 'Владислав',
      last_name: 'Владиславович',
      email: 'vlad@admin.com',
      phone: '+79113336666',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Pixel Perfect для вёрстки',
    description: 'Чтоб пиксель в пиксель',
    id: uuid(),
    column: 'done',
    users: [
      {
        id: 10,
        first_name: 'Владислав',
        last_name: 'Владиславович',
        email: 'vlad@admin.com',
        phone: '+79663666663',
        photo: null,
      },
    ],
    author: {
      id: 10,
      first_name: 'Владислав',
      last_name: 'Владиславович',
      email: 'vlad@admin.com',
      phone: '+79113336666',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
  {
    title: 'Написать стор',
    description: 'Написать стор на RTK',
    id: uuid(),
    column: 'done',
    users: [
      {
        id: 8,
        first_name: 'Владимир Ильич',
        last_name: 'Ленин',
        email: 'user_6@user.com',
        phone: '+79883332211',
        photo: null,
      },
    ],
    author: {
      id: 1,
      first_name: 'Иван',
      last_name: 'Иванов',
      email: 'admin@admin.com',
      phone: '+79223332233',
      photo: null,
    },
    status: 'Срочно',
    deadline: '2023-07-10T12:28:24Z',
    comments: [],
  },
];
