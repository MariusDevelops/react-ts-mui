import React from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const LoadingButtonPage = () => {
  return (
    <Stack sx={{ m: 4 }} direction="row" spacing={2}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loadingIndicator="Loading..." variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default LoadingButtonPage;
