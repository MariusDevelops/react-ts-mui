import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { TextField, InputAdornment } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScaleIcon from '@mui/icons-material/Scale';

const TextFieldPage = () => {
  const [value, setValue] = useState('');

  return (
    <Stack sx={{ m: 4 }} spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form input" required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'} />
        <TextField label="Password" type="password" required helperText="Do not share your password with anyone" disabled />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
        <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start"><AttachMoneyIcon /></InputAdornment> }} />
        <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="end"><ScaleIcon /></InputAdornment> }} />
      </Stack>
    </Stack>
  );
};

export default TextFieldPage;
