import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_CATEGORIES!,
  headers: { 'micro-service': 'details' }
});

const create_category_parent = async (data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/create_parent`, data);
  return res;
};

const create_category_subCategory = async (data: any, id: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/create_parent/${id}`, data);
  return res;
};

const get_all_categories_service = async (): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(`/get_all`);
  return res;
};

const get_category_service = async (id: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(`/${id}`);
  return res;
};
const edit_category_service = async (id: string, data: { name: string; description: string }): Promise<AxiosResponse> => {
  const res = await axiosInstance.patch(`/edit/${id}`, data);
  return res;
};
const delete_category_service = async (id: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/${id}`);
  return res;
};

export {
  create_category_parent,
  create_category_subCategory,
  get_all_categories_service,
  get_category_service,
  edit_category_service,
  delete_category_service
};
