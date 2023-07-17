import { string, bool, requiredFunc } from 'prop-types';

export const taskContainerType = string.isRequired;

export const loginFunctionType = requiredFunc;

export const activeType = bool.isRequired;

export const openType = bool.isRequired;

export const searchFunctionType = requiredFunc;
