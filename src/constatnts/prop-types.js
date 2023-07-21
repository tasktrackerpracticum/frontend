import { string, bool, requiredFunc, object, element } from 'prop-types';

export const taskContainerType = string.isRequired;

export const loginFunctionType = requiredFunc;

export const activeType = bool.isRequired;

export const openType = bool.isRequired;

export const searchFunctionType = requiredFunc;

export const objectType = object.isRequired;

export const functionType = requiredFunc;

export const stringType = string.isRequired;
export const boolType = bool.isRequired;

export const reactElement = element;

