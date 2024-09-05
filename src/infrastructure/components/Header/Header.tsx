import React from 'react';
import { Button } from '@nextui-org/button';

type HeaderProps = {
  countBasket: number;
};

const Header: React.FC<HeaderProps> = ({ countBasket }) => {
  return (
    <header className="Header">
      <h1>Product Page</h1>
      <Button color="primary">Products: {countBasket}</Button>
    </header>
  );
};

export default Header;
