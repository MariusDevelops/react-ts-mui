import React from 'react';
import router from 'navigation/router';
import { RouterProvider } from 'react-router-dom';
// import TypographyPage from 'pages/typography-page';
// import ButtonPage from 'pages/button-page';
// import TextFieldPage from 'pages/text-field-page';
// import { Box } from '@mui/material';

const App = () => (
  <RouterProvider router={router} />
);

// const App = () => (
//   <Box sx={{ m: 4 }}>
//     <TypographyPage />
//     <ButtonPage />
//     <TextFieldPage />
//   </Box>
// );

export default App;
