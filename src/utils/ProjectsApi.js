import { PROJECTS_API } from '../constatnts/constants';
import request from './utilsApi';

export const getProjects = () => {
  return request(PROJECTS_API, {});
};
