import { string, bool, requiredFunc, object } from 'prop-types';

export const taskContainerType = string.isRequired;

export const loginFunctionType = requiredFunc;

export const activeType = bool.isRequired;

export const openType = bool.isRequired;

export const searchFunctionType = requiredFunc;

export const objectType = object.isRequired;

export const functionType = requiredFunc;

export const stringType = string.isRequired;

