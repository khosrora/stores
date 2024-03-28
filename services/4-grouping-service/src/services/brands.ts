import HttpStatus from 'http-status-codes';

export const createBrandService = async () => {
  return {
    status: HttpStatus.OK,
    message: 'OK!'
  };
};
