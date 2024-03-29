import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_BRAND!,
  headers: { 'micro-service': 'brands' }
});

const create_brand_service = async (data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/create_brand`, data);
  return res;
};

const edit_brand_service = async (id: string, data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.patch(`/edit_brand/${id}`, data);
  return res;
};

const add_branch_service = async (id: string, data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/add_branch/${id}`, data);
  return res;
};

const delete_branch_service = async (id: string, idBranch: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/delete_branch/${id}/${idBranch}`);
  return res;
};

const edit_branch_service = async (id: string, idBranch: string, data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.patch(`/edit_branch/${id}/${idBranch}`, data);
  return res;
};

export { create_brand_service, edit_brand_service, add_branch_service, delete_branch_service, edit_branch_service };
