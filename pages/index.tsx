import React, { useState } from 'react';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import products from '../dataBase.js';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import SearchForm from '../components/SearchForm';
import Basket from '../components/Basket';

const Home = function () {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1F204140',
      },
    },
  });
  const [order, setOrder] = useState([]);
  const [openBasket, setOpenBasket] = useState(false);
  const [items, setItems] = useState(products);
  const addToOrder = (item) => () => {
    const newOrder = [...order, item];
    setOrder(newOrder);
  };
  const toggleBasket = () => {
    setOpenBasket(!openBasket);
  };
  const removeFromOrder = (id) => () => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };
  const searchFilter = (keyWord) => {
    const filterProducts = products.filter(
      (item) => item.name.toLowerCase().includes(keyWord) || item.category.includes(keyWord),
    );
    setItems(filterProducts);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header toggleBasket={toggleBasket} />
      <Container>
        <SearchForm searchFilter={searchFilter} />
        <ProductsList addToOrder={addToOrder} products={items} />
      </Container>
      <Basket
        order={order}
        toggleBasket={toggleBasket}
        openBasket={openBasket}
        removeFromOrder={removeFromOrder}
      />
    </ThemeProvider>
  );
};

export default Home;
