import User from '@auth/model/User.model';
import winstonLogger from '@auth/utils/logger';
import { createRandomNumber } from '@auth/utils/randomNumber';
import { IUser } from '@auth/utils/User.interface';
import { StatusCodes } from 'http-status-codes';
import { Logger } from 'winston';

const logger: Logger = winstonLogger('debug');

export const getOtpService = async (data: { phoneNumber: string }) => {
  const { phoneNumber } = data;
  const user: IUser | null = await findByPhoneNumber(phoneNumber);
  if (!!user) {
    // ! send number and code otp to notification service
    // #TODO send number and code otp to notification service
  } else {
    await create(phoneNumber);
  }
  return {
    status: StatusCodes.OK,
    message: 'کد تایید برای شما ارسال شد'
  };
};

export const checkOtpService = async (data: { phoneNumber: string; code: number }) => {
  const { phoneNumber, code } = data;
  const user: IUser | null = await findByPhoneNumber(phoneNumber);
  if (!user) throw new Error('Internal Server Error from method checkOtpService()');
  const isEqual = user.otpCode === code;
  if (isEqual) {
    // change otp user
    user.otpCode = createRandomNumber();
    await user.save();
    // create refresh token
    return {
      status: StatusCodes.OK,
      message: 'ورود با موفقیت انجام شد',
      refreshToken: '1212'
    };
  } else {
    return {
      status: StatusCodes.BAD_REQUEST,
      message: 'در وارد کردن کد دقت کنید',
      refreshToken: null
    };
  }
};

const findByPhoneNumber = async (phoneNumber: string): Promise<IUser | null> => {
  const user: IUser | null = await User.findOne({ phoneNumber });
  if (!user) return null;
  return user;
};

const create = async (phoneNumber: string) => {
  try {
    // ! create user
    await User.create({
      phoneNumber,
      otpCode: createRandomNumber()
    });
    // ! send number and code otp to notification service
    // #TODO send number and code otp to notification service
  } catch (error) {
    logger.error('findByPhoneNumber() method error is :', error);
  }
};
