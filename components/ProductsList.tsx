import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ProductsList = ({ products }) => {
    return <Grid container spacing={2} sx={{mt: '20px'}}>
        {products.map((product) => {
            return <Grid item xs={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia alt={product.name} component="img" height="140" image={product.image} />
                    <CardContent>
                        <Typography component="div" variant="h5">
                            {product.name}
                        </Typography>
                        <Typography component="div" variant="body2">
                            {product.price} руб.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Купить</Button>
                    </CardActions>
                </Card>
            </Grid>
        })}
    </Grid>
};

export default ProductsList;