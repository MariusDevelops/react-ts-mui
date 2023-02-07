import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const SelectPage = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Box sx={{ m: 4 }} width="250px">
      <TextField
        label="Select country"
        select
        SelectProps={{
          multiple: true,
        }}
        value={countries}
        onChange={handleChange}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default SelectPage;
