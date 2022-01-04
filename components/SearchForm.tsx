import React, { useState } from 'react';
import {
  Box, TextField, Button, FormGroup,
} from '@mui/material';

interface Props {
  searchFilter: Function
}

const SearchForm = function ({ searchFilter }: Props) {
  const [keyWord, setKeyWord] = useState('');
  return (
    <Box
      component="form"
      onSubmit={(ev) => {
        ev.preventDefault();
        searchFilter(keyWord.toLowerCase());
      }}
    >
      <FormGroup>
        <TextField label="Поиск товара" value={keyWord} onChange={(ev) => setKeyWord(ev.target.value)} variant="standard" />
        <Button type="submit" variant="outlined">Найти</Button>
      </FormGroup>
    </Box>
  );
};

export default SearchForm;
