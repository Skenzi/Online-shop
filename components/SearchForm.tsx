import { Box, TextField, Button, FormGroup } from '@mui/material';

const SearchForm = () => {
    return <Box component="form">
        <FormGroup>
            <TextField label="Поиск товара" variant="standard" />
            <Button type="submit" variant='outlined'>Найти</Button>
        </FormGroup>
    </Box>
};

export default SearchForm;