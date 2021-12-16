import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = ({ toggleBasket }) => {
    return <Box component="header">
        <AppBar position="static">
            <Toolbar>
                <Typography component="span" variant="h6" sx={{flexGrow: 1}}>Online-shop</Typography>
                <IconButton onClick={toggleBasket}>
                    <ShoppingBasketIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
};

export default Header;