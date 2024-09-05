import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from '@nextui-org/react';
import React from 'react';
import BasketCard from './BasketCard';
import { Basket, BasketItem } from '../../../domain/models/Basket';
import { Product } from '../../../domain/models/Product';

type BasketListProps = {
  basket: Basket | null;
  onDeleteProduct: (product: Product) => void;
};

const BasketList: React.FC<BasketListProps> = ({ basket, onDeleteProduct }) => {
  const [basketItem, setBasketItem] = React.useState<BasketItem[]>([]);

  React.useEffect(() => {
    setBasketItem(basket?.items || []);
  }, [basket]);

  return (
    <Card
      className="max-w-[400px]"
      radius="none"
      style={{
        width: '20%',
        height: 'max-height',
        padding: '10px',
        justifySelf: 'center',
      }}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <b className="text-lg">BASKET</b>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {basketItem.map((item) => (
          <BasketCard basketItem={item} onDeleteProduct={onDeleteProduct} />
        ))}
      </CardBody>
      <Divider />
      <CardFooter>
        <Button color="success">Pay with credit card</Button>
      </CardFooter>
    </Card>
  );
};

export default BasketList;
