import React from 'react';

type HeaderProps = {
  countBasket: number;
};

const Header: React.FC<HeaderProps> = ({ countBasket }) => {
  return (
    <header className="Header">
      <h1>Product Page</h1>
      <button>Products: {countBasket}</button>
    </header>
  );
};

export default Header;
