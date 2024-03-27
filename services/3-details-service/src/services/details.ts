import { StatusCodes } from 'http-status-codes';
import { IDetails } from '@details/utils/Details.interface';
import Details from '@details/model/Details.model';

export const editDetailsService = async (data: IDetails, id: string) => {
  const detail = await findAndUpdate(data, id);
  if (detail) {
    return {
      message: 'اطلاعات با موفقیت ویرایش شد',
      status: StatusCodes.OK,
      detail
    };
  } else {
    return {
      message: 'اطلاعاتی پیدا نشد',
      status: StatusCodes.BAD_REQUEST,
      data: null
    };
  }
};

export const deleteAddressDetailsService = async (id: string, addressId: string) => {
  // TODO fixed this
  const detail = await Details.updateOne(
    { _id: id },
    {
      $pull: {
        addresses: { _id: addressId }
      }
    },
    {
      new: true
    }
  );
  if (detail.modifiedCount === 1) {
    return {
      message: 'آدرس با موفقیت حذف شد',
      status: StatusCodes.OK,
      detail
    };
  } else {
    return {
      message: 'اطلاعاتی پیدا نشد',
      status: StatusCodes.BAD_REQUEST,
      data: null
    };
  }
};

export const editAddressDetailsService = async (id: string, addressId: string, data: any) => {
  // TODO fixed this
  const detail = await Details.updateOne(
    { _id: id, 'items.id': addressId },
    {
      $set: {
        addresses: {
          'address.$.province': data.province,
          'addresses.$.city': data.city,
          'addresses.$.postalCode': data.postalCode,
          'addresses.$.pelak': data.pelak,
          'addresses.$.address': data.address
        }
      }
    },
    {
      new: true
    }
  );
  if (detail.modifiedCount === 1) {
    return {
      message: 'آدرس با موفقیت حذف شد',
      status: StatusCodes.OK,
      detail
    };
  } else {
    return {
      message: 'اطلاعاتی پیدا نشد',
      status: StatusCodes.BAD_REQUEST,
      data: null
    };
  }
};

const findAndUpdate = async (newData: IDetails, id: string): Promise<IDetails | null> => {
  try {
    const detail = (await Details.findOneAndUpdate({ _id: id }, newData, { new: true })) as IDetails;
    return detail;
  } catch (error) {
    return null;
  }
};
