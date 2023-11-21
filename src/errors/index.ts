import httpStatus from 'http-status';

export function notFound() {
  return {
    name: 'NOT_FOUND',
    code: httpStatus.NOT_FOUND,
  };
}

export function messageNotFound() {
  return {
    name: 'MESSAGE_NOT_FOUND',
    code: httpStatus.NOT_FOUND,
  };
}
