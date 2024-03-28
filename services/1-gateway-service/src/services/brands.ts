import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_BRAND!,
  headers: { 'micro-service': 'brands' }
});

const create_brand_service = async (): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/create_brand`);
  return res;
};

export { create_brand_service };
