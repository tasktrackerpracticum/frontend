import { string, bool, requiredFunc } from 'prop-types';

export const taskContainerType = string.isRequired;

export const loginFunctionType = requiredFunc;

export const activeType = bool.isRequired;

export const openFunctionType = requiredFunc;

export const searchFunctionType = requiredFunc;
