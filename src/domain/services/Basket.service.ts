import * as uuid from 'uuid';
import { Product } from '../models/Product';
import { Basket } from '../models/Basket';

const hasProduct = (basket: Basket, product: Product) =>
  basket.items.find((item) => item.product.id === product.id);

const createBasket = (product: Product, amount: number) => ({
  id: uuid.v4(),
  items: [{ product, amount }],
});

const increaseBasket = (
  basket: Basket,
  product: Product,
  amount: number,
): Basket => ({
  ...basket,
  items: [...basket.items, { product, amount }],
});

const decreaseBasket = (basket: Basket, product: Product): Basket => ({
  ...basket,
  items: basket.items.filter((item) => item.product.id !== product.id),
});

const increaseAmountProduct = (
  basket: Basket,
  product: Product,
  amount: number,
): Basket => ({
  ...basket,
  items: basket.items.map((item) => {
    if (item.product.id === product.id) {
      item.amount = amount + item.amount;
    }
    return item;
  }),
});

const addProductToBasket = (
  product: Product,
  amount: number,
  basket?: Basket | null,
): Basket =>
  basket
    ? hasProduct(basket, product)
      ? increaseAmountProduct(basket, product, amount)
      : increaseBasket(basket, product, amount)
    : createBasket(product, amount);

const deleteProductToBasket = (
  product: Product,
  basket: Basket,
): Basket | null =>
  basket?.items.length !== 1 ? decreaseBasket(basket, product) : null;

export const basketService = {
  addProductToBasket,
  deleteProductToBasket,
};
