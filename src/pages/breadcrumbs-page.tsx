/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Box, Breadcrumbs, Link, Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsPage = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
        aria-label="breadcrumb"
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Link underline="hover" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsPage;
