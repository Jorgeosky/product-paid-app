import { Product } from './Product';

export type BasketId = string;

export type BasketItem = {
  product: Product;
  amount: number;
};

export type Basket = {
  id: BasketId;
  items: BasketItem[];
};
