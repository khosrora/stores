import { config } from '@gateway/config';
import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_ORDERS!,
  headers: { 'micro-service': 'orders' }
});

const test_service = async (): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(`/health_orders`);
  return res;
};

const createOrder_service = async (data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/create_order`, data);
  return res;
};

export { test_service, createOrder_service };
