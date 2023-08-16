import { string, bool, object, element, number, array, func } from 'prop-types';

export const taskContainerType = string.isRequired;

export const loginFunctionType = func.isRequired;

export const activeType = func.isRequired;

export const openType = func.isRequired;

export const searchFunctionType = func;

export const objectType = object.isRequired;

export const arrayType = array.isRequired;

export const functionType = func.isRequired;

export const numberType = number.isRequired;

export const stringType = string;

export const boolType = bool.isRequired;

export const reactElement = element;

