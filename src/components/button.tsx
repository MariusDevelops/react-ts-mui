import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type ButtonProps = MuiButtonProps;

const Button: React.FC<ButtonProps> = ({ children, sx, ...props }) => (
  <MuiButton
    {...props}
    sx={[
      {
        textTransform: 'none',
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {children}
  </MuiButton>
);

export default Button;
