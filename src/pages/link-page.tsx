/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Stack, Link, Typography } from '@mui/material';

const LinkPage = () => {
  return (
    <Stack spacing={2} m={4} direction="row">
      <Typography variant="h6">
        <Link href="#">Link</Link>
      </Typography>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
      <Link href="#" variant="body2" underline="none">
        Body 2 link
      </Link>
    </Stack>
  );
};

export default LinkPage;
