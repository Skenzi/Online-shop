import { Box, TextField, Button, FormGroup } from '@mui/material';
import { useState } from 'react';

const SearchForm = ({ searchFilter }) => {
    const [keyWord, setKeyWord] = useState('');
    return <Box component="form" onSubmit={(ev) => {
        ev.preventDefault();
        searchFilter(keyWord.toLowerCase());
    }}>
        <FormGroup>
            <TextField label="Поиск товара" value={keyWord} onChange={(ev) => setKeyWord(ev.target.value)} variant="standard" />
            <Button type="submit" variant='outlined'>Найти</Button>
        </FormGroup>
    </Box>
};

export default SearchForm;