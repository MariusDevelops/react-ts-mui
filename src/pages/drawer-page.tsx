import React, { useState } from 'react';
import {
  Drawer, Box, Typography, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ m: 4 }}>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ mt: 10 }} p={2} width="250px" role="presentation" textAlign="center">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerPage;
