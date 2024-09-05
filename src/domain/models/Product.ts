export type ProductId = string;

export type Product = {
  id: ProductId;
  title: string;
  price: number;
  amount: number;
  img: string;
  description: string;
  offer: number | null;
};
