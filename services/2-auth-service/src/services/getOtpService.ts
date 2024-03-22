export const getOtpService = async (phoneNumber: string): Promise<any> => {
  console.log(phoneNumber);
  return {
    message: 'کد تایید برای شما ارسال شد'
  };
};
