import React from 'react';
import { Drawer } from '@mui/material';
import BasketList from './BasketList';

interface Props {
    order: Array<{id: number, name: string, price: number}>,
    removeFromOrder: Function,
    toggleBasket: Function,
    openBasket: boolean
}

const Basket = function ({
  order, toggleBasket, openBasket, removeFromOrder,
}: Props) {
  return (
    <Drawer anchor="right" open={openBasket} onClose={() => toggleBasket()} sx={{ width: 300 }}>
      <BasketList order={order} removeFromOrder={removeFromOrder} />
    </Drawer>
  );
};

export default Basket;
