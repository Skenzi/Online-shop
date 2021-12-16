import { Container, createTheme, ThemeProvider } from "@mui/material";
import { products } from '../dataBase.js';
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

export default function Home() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#1F204140'
            }
        }
    });
    return <ThemeProvider theme={theme}>
        <Header />
        <Container>
            <ProductsList products={products} />
        </Container>
    </ThemeProvider>
}