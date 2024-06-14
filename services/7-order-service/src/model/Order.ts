import sequelize from '@order/db';
import { DataType, Model } from 'sequelize-typescript';

enum StateOrder {
  isPending = 'isPending',
  inProgress = 'inProgress',
  sent = 'sent',
  delivered = 'delivered'
}

type order = {
  id?: number;
  idProduct: string;
  idStore: string;
  count: number;
  price: number;
  totalPrice: number;
  state: StateOrder;
};

export type OrderType = {
  id?: number;
  uniqueId: number;
  userId: string;
  orders: order[];
  createdAt?: Date;
  updatedAt?: Date;
};

const Order = sequelize.define<Model<OrderType>>(
  'order',
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uniqueId: {
      type: DataType.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataType.STRING,
      allowNull: false
    },
    orders: {
      type: DataType.JSONB,
      allowNull: false
    },
    createdAt: {
      type: DataType.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataType.DATE,
      allowNull: true
    }
  },
  {
    timestamps: true // Enable timestamps
  }
);

Order.sync({});
export { Order };
