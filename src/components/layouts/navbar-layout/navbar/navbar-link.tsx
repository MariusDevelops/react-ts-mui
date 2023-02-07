import { alpha, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'inline-grid',
  placeItems: 'center',
  padding: theme.spacing(0, 1.5),
  textDecoration: 'none',
  color: alpha(
    theme.palette.common.white,
    1 - theme.palette.action.focusOpacity,
  ),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&.active': {
    boxShadow: `inset 0 -4px 0 0 ${theme.palette.common.white}`,
    color: theme.palette.common.white,
  },
}));

export default NavbarLink;
