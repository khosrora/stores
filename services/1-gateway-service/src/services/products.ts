import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';
import { IAuthPayload } from '..';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_PRODUCTS!,
  headers: { 'micro-service': 'products' }
});

const get_all_products = async (): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(`/all_products`);
  return res;
};

const create_products_products = async (data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/create_products`, data);
  return res;
};

const isActive_orNot = async (id: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(`/isActive/${id}`);
  return res;
};

const deleteProductService = async (id: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/delete/${id}`);
  return res;
};

const addAttributesService = async (id: string, data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/addAttributes/${id}`, data);
  return res;
};

const addSpecificationsService = async (id: string, data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/addSpecifications/${id}`, data);
  return res;
};

const deleteAttributesService = async (id: string, attrId: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/deleteAttributes/${id}/${attrId}`);
  return res;
};

const deleteSpecificationsService = async (id: string, specId: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/deleteSpecifications/${id}/${specId}`);
  return res;
};

const addTypesService = async (id: string, data: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.post(`/addTypes/${id}`, data);
  return res;
};

const deleteTypesService = async (id: string, specId: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/deleteTypes/${id}/${specId}`);
  return res;
};

export {
  get_all_products,
  create_products_products,
  isActive_orNot,
  addSpecificationsService,
  addAttributesService,
  deleteAttributesService,
  deleteSpecificationsService,
  addTypesService,
  deleteTypesService,
  deleteProductService
};
