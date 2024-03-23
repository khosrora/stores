import User from '@auth/model/User.model';
import winstonLogger from '@auth/utils/logger';
import { createRandomNumber } from '@auth/utils/randomNumber';
import { IUser } from '@auth/utils/User.interface';
import { StatusCodes } from 'http-status-codes';
import { Logger } from 'winston';
import * as jwt from 'jsonwebtoken';
import { phoneNumberValidationSchema } from '@auth/schema/phoneNumberValidation';
import { checkCodeValidation } from '@auth/schema/checkCodeValidation';
import { refreshTokenValidationSchema } from '@auth/schema/refreshTokenValidation';
import { config } from '@auth/config';
import { publishDirectMessage } from '@auth/queue/auth.producer';
import { authChannel } from '@auth/server';

const logger: Logger = winstonLogger('debug');

interface JwtPayload {
  id: string;
}

export const getOtpService = async (data: { phoneNumber: string }) => {
  const validation = phoneNumberValidationSchema.validate(data);
  if (validation.error) {
    return {
      status: StatusCodes.BAD_REQUEST,
      message: null,
      errors: validation.error
    };
  }
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
  const validation = checkCodeValidation.validate(data);
  if (validation.error) {
    return {
      status: StatusCodes.BAD_REQUEST,
      message: null,
      errors: validation.error
    };
  }

  const { phoneNumber, code } = data;
  const user: IUser | null = await findByPhoneNumber(phoneNumber);
  if (!user)
    return {
      status: StatusCodes.BAD_REQUEST,
      message: 'کاربری با این اطلاعات وجود ندارد'
    };
  const isEqual = user.otpCode === code;
  if (isEqual) {
    // change otp user
    user.otpCode = createRandomNumber();
    await user.save();
    // create refresh token
    const refreshToken = await createRefreshToken(user.id);
    publishDirectMessage(authChannel, 'details-user-id', 'auth-details', JSON.stringify({ id: user.id }), 'create details user');
    return {
      status: StatusCodes.OK,
      message: 'ورود با موفقیت انجام شد',
      refreshToken
    };
  } else {
    return {
      status: StatusCodes.BAD_REQUEST,
      message: 'در وارد کردن کد دقت کنید',
      refreshToken: null
    };
  }
};

export const accessTokenService = async (refreshToken: string) => {
  const validation = refreshTokenValidationSchema.validate({ refreshToken });
  if (validation.error) {
    return {
      status: StatusCodes.BAD_REQUEST,
      message: null,
      errors: validation.error
    };
  }
  const accessToken = await createAccessToken(refreshToken);
  return {
    status: StatusCodes.OK,
    message: 'OK',
    accessToken
  };
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

const createRefreshToken = async (id: string): Promise<string> => jwt.sign({ id }, config.REFRESH_SECRET!, { expiresIn: '15d' });

const createAccessToken = async (refreshToken: string) => {
  const { id } = (await jwt.verify(refreshToken, config.REFRESH_SECRET!)) as JwtPayload;
  return jwt.sign({ id }, config.ACCESS_SECRET!, { expiresIn: '15d' });
};
