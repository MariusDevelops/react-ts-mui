import React from 'react';
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const BadgePage = () => {
  return (
    <Stack sx={{ m: 4 }} spacing={2} direction="row">
      <Badge badgeContent={5} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="info" max={999}>
        <MailIcon />
      </Badge>
      <Badge color="warning" variant="dot">
        <MailIcon />
      </Badge>
      <Badge>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default BadgePage;
