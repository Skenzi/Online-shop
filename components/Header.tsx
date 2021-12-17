import { AppBar, Box, IconButton, Toolbar, Typography, Link, Breadcrumbs } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = ({ toggleBasket }) => {
    return <Box component="header">
        <AppBar position="static">
            <Toolbar>
                <Breadcrumbs sx={{flexGrow: 1}} aria-label="breadcrumb">
                <Link href="/" underline="none" variant="h6">
                    Online-shop
                </Link>
                </Breadcrumbs>
                <IconButton onClick={toggleBasket}>
                    <ShoppingBasketIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
};

export default Header;