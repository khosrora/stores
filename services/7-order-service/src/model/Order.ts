import { Model, DataType } from 'sequelize-typescript';
import sequelize from '@order/db';

enum StateOrder {
  isPending = 'isPending',
  inProgress = 'inProgress',
  sent = 'sent',
  delivered = 'delivered'
}

type order = {
  id: number;
  idProduct: number;
  idStore: number;
  count: number;
  totalPrice: number;
  state: StateOrder;
};

class Order extends Model {
  public id!: number;
  public uniqueId!: number;
  public userId!: number;
  public orders!: order[];
}

Order.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    uniqueId: {
      type: DataType.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataType.INTEGER,
      allowNull: false
    },
    orders: {
      type: DataType.JSONB,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Order'
  }
);

export default Order;
