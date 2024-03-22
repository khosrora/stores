import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_AUTH!,
  headers: { 'micro-service': 'auth' }
});

const get_otp_service = async (phoneNumber: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.post('/get_otp', { phoneNumber });
  return res;
};

const check_otp_service = async (phoneNumber: string, code: number): Promise<AxiosResponse> => {
  const res = await axiosInstance.post('/check_otp', { phoneNumber, code });
  return res;
};

export { get_otp_service, check_otp_service };
