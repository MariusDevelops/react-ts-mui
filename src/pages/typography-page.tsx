/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';

const TypographyPage = () => (
  <div>
    <Typography variant="h1">h1 Heading</Typography>
    <Typography variant="h2">h2 Heading</Typography>
    <Typography variant="h3">h3 Heading</Typography>
    <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
    <Typography variant="h5">h5 Heading</Typography>
    <Typography variant="h6">h6 Heading</Typography>

    <Typography variant="subtitle1">Sub title 1</Typography>
    <Typography variant="subtitle2">Sub title 2</Typography>

    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rerum doloremque officia saepe impedit dolor, eum mollitia magnam, enim explicabo quo similique, non porro perferendis obcaecati temporibus recusandae cupiditate facere!</Typography>
    <Typography>
      Default value. Same as body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rerum doloremque officia saepe impedit dolor, eum mollitia magnam, enim explicabo quo similique, non porro perferendis obcaecati temporibus recusandae cupiditate facere!
    </Typography>
    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta deserunt cum fuga ullam placeat. Saepe temporibus quis eius, repellendus officiis suscipit, repudiandae nobis et optio quibusdam, ratione doloribus. Nemo.</Typography>
  </div>
);

export default TypographyPage;
