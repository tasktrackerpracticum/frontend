import { string, bool, object, element, func, array } from 'prop-types';

export const taskContainerType = string.isRequired;

export const activeType = bool.isRequired;
export const setActiveType = func.isRequired;

export const openType = bool.isRequired;

export const objectType = object.isRequired;
export const arrayType = array.isRequired;

export const functionType = func.isRequired;

export const stringType = string.isRequired;
export const boolType = bool.isRequired;

export const reactElement = element;
