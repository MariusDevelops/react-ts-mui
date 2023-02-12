import React from 'react';
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

const ProgressPage = () => {
  return (
    <Stack sx={{ m: 4 }} spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};

export default ProgressPage;
