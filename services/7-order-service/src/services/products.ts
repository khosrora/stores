import HttpStatus from 'http-status-codes';

import { OrderType, Order } from '@order/model/Order';
import { createRandomNumber } from '@order/utils/createRandomUniqueId';

// import events from 'events';
// const myEvents = new events();

export const create_order_service = async (data: OrderType, id: string) => {
  try {
    const result = await Order.create({
      uniqueId: createRandomNumber(),
      userId: id,
      orders: data.orders
    });
    return {
      status: HttpStatus.CREATED,
      message: 'سفارش شما با موفقیت ثبت شد',
      products: result
    };
  } catch (error) {
    console.log(error);
    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'مشکلی از سمت سرور رخ داده است',
      products: []
    };
  }
};
