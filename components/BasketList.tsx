import React from 'react';
import {
  IconButton, List, ListItem, ListItemText, Typography, Divider,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    order: Array<{id: number, name: string, price: number}>,
    removeFromOrder: Function
}

const BasketList = function ({ order, removeFromOrder }: Props) {
  const totalPrice = order.reduce((sum, item) => item.price + sum, 0);
  const listItems = order.map((item) => (
    <ListItem key={item.id}>
      <ListItemText primary={item.name} />
      <ListItemText primary={`${item.price} руб.`} />
      <IconButton onClick={removeFromOrder(item.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  ));
  return (
    <List sx={{ width: 300 }}>
      <ListItem>
        <Typography component="span" sx={{ flexGrow: 1 }}>Корзина</Typography>
        <ShoppingBasketIcon />
      </ListItem>
      <Divider />
      {order.length ? (
        <>
          {listItems}
          <Divider />
          <ListItem>
            <Typography>
              Итог:
              {totalPrice}
              {' '}
              руб.
            </Typography>
          </ListItem>
        </>
      ) : (
        <ListItem>
          <Typography>Корзина пуста</Typography>
        </ListItem>
      )}
    </List>
  );
};

export default BasketList;
