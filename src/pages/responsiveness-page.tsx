import React from 'react';
import { Box } from '@mui/material';

const ResponsivenessPage = () => {
  return (
    <Box sx={{
      m: 4,
      height: '300px',
      width: {
        xs: 100,
        sm: 200,
        md: 300,
        lg: 400,
        xl: 500,
      },
      // bgcolor: 'primary.main',
      // bgcolor: 'secondary.main',
      bgcolor: 'secondary.dark',
    }}
    />
  );
};

export default ResponsivenessPage;
