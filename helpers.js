
import omitDeep from 'omit-deep';

export const omit = (object, name) => {
  return omitDeep(object, name);
};

export const wait = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};