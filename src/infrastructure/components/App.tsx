import React from 'react';
import { ProductList } from './Product/ProductList';
import { Basket } from '../../domain/models/Basket';
import { Product } from '../../domain/models/Product';
import { basketService } from '../../domain/services/Basket.service';
import BasketList from './Basket/BasketList';
import Header from './Header/Header';

type AppProps = {
  msg: string;
};

const App: React.FC<AppProps> = ({ msg }) => {
  const [basket, setBasket] = React.useState<Basket | null>(null);
  const handleAddToCart = (product: Product, amount: number) => {
    setBasket(basketService.addProductToBasket(product, amount, basket));
    console.log('basket: ', basket);
  };
  const handleDeleteToCart = (product: Product) => {
    if (basket) {
      setBasket(basketService.deleteProductToBasket(product, basket));
    }
  };
  return (
    <div className="App">
      <Header countBasket={basket?.items.length || 0} />
      <div
        className="Content"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <ProductList onSelectProduct={handleAddToCart} />
        <BasketList basket={basket} onDeleteProduct={handleDeleteToCart} />
      </div>
    </div>
  );
};

export default App;
