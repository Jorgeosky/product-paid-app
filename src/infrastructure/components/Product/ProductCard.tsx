import React from 'react';
import { Button, Card, CardBody, Image, Skeleton } from '@nextui-org/react';
import { Product } from '../../../domain/models/Product';

type ProductCardProps = {
  product: Product;
  onSelectProduct: (product: Product, amount: number) => void;
  blank?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  blank,
}) => {
  const [amount, setAmount] = React.useState<number>(1);

  return (
    <Card
      className="ProductCard"
      shadow="lg"
      key={product.id}
      onPress={() => console.log('item pressed')}
      style={{ height: 'max-content' }}
    >
      <CardBody
        className="overflow-visible p-0"
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '3%',
          maxHeight: '10%',
        }}
      >
        {!blank ? (
          <Image
            radius="lg"
            width="35%"
            alt={product.title}
            className="w-full"
            src={product.img}
          />
        ) : (
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        )}
        <div
          className="ContentProductCard"
          style={{
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            margin: '10px',
          }}
        >
          {!blank ? (
            <>
              <h1>{product.title}</h1>
              <p className="text-default-500">{product.description}</p>
              <p>
                {product.offer !== null ? (
                  <>
                    {' '}
                    <b>
                      $
                      {(
                        product.price -
                        (product.price * product.offer) / 100
                      ).toFixed(2)}
                    </b>{' '}
                    <b
                      style={{ color: 'gray', textDecoration: 'line-through' }}
                    >
                      ${product.price}
                    </b>{' '}
                    <b style={{ color: 'red' }}>{product.offer}% Off</b>
                  </>
                ) : (
                  <b>${product.price}</b>
                )}
              </p>
              <p>Amount: {product.amount}</p>
              <div>
                {product.amount > 0 ? (
                  <>
                    <Button
                      isIconOnly
                      color="primary"
                      aria-label="Like"
                      variant={amount === 1 ? 'light' : 'flat'}
                      isDisabled={amount === 1 ? true : false}
                      onClick={() => setAmount(amount - 1)}
                    >
                      <b>-</b>
                    </Button>
                    <b style={{ margin: '10px' }}>{amount}</b>
                    <Button
                      isIconOnly
                      color="primary"
                      aria-label="Like"
                      variant={amount === product.amount ? 'light' : 'flat'}
                      isDisabled={amount === product.amount ? true : false}
                      onClick={() => setAmount(amount + 1)}
                    >
                      <b>+</b>
                    </Button>
                    <Button
                      color="secondary"
                      radius="full"
                      variant="bordered"
                      style={{ margin: '10px' }}
                      onClick={() => {
                        onSelectProduct(product, amount);
                        setAmount(1);
                      }}
                    >
                      Add to Bag
                    </Button>
                  </>
                ) : (
                  <Button
                    color="danger"
                    radius="full"
                    variant="bordered"
                    style={{
                      margin: '10px',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                    }}
                    isDisabled
                  >
                    Not available
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
