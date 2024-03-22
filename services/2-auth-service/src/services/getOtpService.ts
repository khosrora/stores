import User from '@auth/model/User.model';
import winstonLogger from '@auth/utils/logger';
import { createRandomNumber } from '@auth/utils/randomNumber';
import { IUser } from '@auth/utils/User.interface';
import { Logger } from 'winston';

const logger: Logger = winstonLogger('debug');

export const getOtpService = async (data: { phoneNumber: string }): Promise<any> => {
  const { phoneNumber } = data;
  const user: IUser | null = await findByPhoneNumber(phoneNumber);
  if (!!user) {
    // ! send number and code otp to notification service
    // #TODO send number and code otp to notification service
  } else {
    await create(phoneNumber);
  }

  return {
    message: 'کد تایید برای شما ارسال شد'
  };
};

const findByPhoneNumber = async (phoneNumber: string): Promise<any> => {
  try {
    const user: IUser | null = await User.findOne({ phoneNumber });
    return user;
  } catch (error) {
    logger.error('findByPhoneNumber() method error is :', error);
  }
};

const create = async (phoneNumber: string): Promise<any> => {
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
