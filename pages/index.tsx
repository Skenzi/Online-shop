import { useState } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { products } from '../dataBase.js';
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import SearchForm from '../components/SearchForm';
import Basket from "../components/Basket";

export default function Home() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#1F204140'
            }
        }
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
    return <ThemeProvider theme={theme}>
        <Header toggleBasket={toggleBasket} />
        <Container>
            <SearchForm />
            <ProductsList addToOrder={addToOrder} products={items} />
        </Container>
        <Basket order={order} toggleBasket={toggleBasket} openBasket={openBasket} removeFromOrder={removeFromOrder} />
    </ThemeProvider>
}