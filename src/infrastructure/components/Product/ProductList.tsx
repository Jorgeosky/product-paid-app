import * as React from 'react';
import { ScrollShadow, Skeleton } from '@nextui-org/react';
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll';
import { Product } from '../../../domain/models/Product';
import { productService } from '../../../domain/services/Product.service';
import ProductCard from './ProductCard';
type ProductListProps = {
  onSelectProduct: (product: Product, amount: number) => void;
};

export const ProductList: React.FC<ProductListProps> = ({
  onSelectProduct,
}) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isAtBottom, setIsAtBottom] = React.useState<boolean>(false);
  const [items, setItems] = React.useState(Array.from({ length: 15 }));
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(true);

  const loadMoreItems = () => {
    // Simula una carga de datos con un retraso
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 15 })]);
      // Simula que ya no hay más elementos por cargar
      if (items.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  };

  const [triggerRef, containerRef] = useInfiniteScroll({
    onLoadMore: loadMoreItems,
    hasMore,
  });

  React.useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  return (
    <>
      <ScrollShadow
        className="w-[300px] h-[400px]"
        ref={containerRef}
        style={{
          width: '80%',
          height: '100%',
          padding: '10px',
          backgroundColor: isAtBottom ? 'red' : 'gray',
          justifySelf: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gridGap: '10px',
          gridColumn: 'auto',
        }}
        hideScrollBar
      >
        {products.map((product) => (
          <ProductCard product={product} onSelectProduct={onSelectProduct} />
        ))}
        {items.map((_, index) => (
          <div
            key={index}
            style={{ height: '100px', borderBottom: '1px solid gray' }}
          >
            Item {index + 1}
          </div>
        ))}
        {hasMore && (
          <>
            <ProductCard
              product={{}}
              onSelectProduct={onSelectProduct}
              blank={true}
            />
            <ProductCard
              product={{}}
              onSelectProduct={onSelectProduct}
              blank={true}
            />
            <ProductCard
              product={{}}
              onSelectProduct={onSelectProduct}
              blank={true}
            />
            <div ref={triggerRef}></div>
          </>
        )}
      </ScrollShadow>
    </>
  );
};
