import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import React from 'react';
import { BasketItem } from '../../../domain/models/Basket';
import { Product } from '../../../domain/models/Product';

type BasketCardProps = {
  basketItem: BasketItem;
  onDeleteProduct: (product: Product) => void;
};

const BasketCard: React.FC<BasketCardProps> = ({
  basketItem,
  onDeleteProduct,
}) => {
  console.log('item:', basketItem);
  return (
    <Card>
      <CardHeader>{basketItem.product.title}</CardHeader>
      <CardBody>{basketItem.amount}</CardBody>
      <CardFooter>
        <Button
          color="danger"
          onClick={() => onDeleteProduct(basketItem.product)}
        >
          Drop
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BasketCard;
