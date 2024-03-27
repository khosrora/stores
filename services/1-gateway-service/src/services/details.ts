import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';
import { AddressType } from '@gateway/utils/Details.interface';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_DETAILS!,
  headers: { 'micro-service': 'details' }
});

const edit_service = async ({ data, id }: any): Promise<AxiosResponse> => {
  const res = await axiosInstance.patch(`/edit/${id}`, data);
  return res;
};

const deleteAddress_service = async (id: string, addressId: string): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(`/edit_address/${id}/${addressId}`);
  return res;
};

const editAddress_service = async (id: string, addressId: string, data: AddressType): Promise<AxiosResponse> => {
  const res = await axiosInstance.put(`/edit_address/${id}/${addressId}`, data);
  return res;
};

export { edit_service, deleteAddress_service, editAddress_service };
