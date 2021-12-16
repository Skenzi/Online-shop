import { Drawer } from '@mui/material';
import BasketList from './BasketList';

const Basket = ({ order, toggleBasket, openBasket, removeFromOrder }) => {
    return <Drawer anchor='right' open={openBasket} onClose={toggleBasket} sx={{width: 300}}>
        <BasketList order={order} removeFromOrder={removeFromOrder} />
    </Drawer>
};

export default Basket;