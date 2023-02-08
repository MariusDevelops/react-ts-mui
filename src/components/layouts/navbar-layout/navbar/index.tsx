import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Breakpoint,
  Drawer,
  MenuList,
  MenuItem,
  useMediaQuery,
  type Theme,
} from '@mui/material';
import routes from 'navigation/routes';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarLink from './navbar-link';
import NavbarMobileLink from './navbar-mobile-link';

const linksData = [
  { link: routes.HomePage, text: 'Home' },
  { link: routes.TypographyPage, text: 'Typography' },
  { link: routes.ButtonPage, text: 'Buttons' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
  { link: routes.RadioButtonPage, text: 'Radio Button' },
  { link: routes.CheckboxPage, text: 'Checkbox' },
  { link: routes.SwitchPage, text: 'Switch' },
  { link: routes.RatingPage, text: 'Rating' },
  { link: routes.AutocompletePage, text: 'Autocomplete' },
  { link: routes.LayoutPage, text: 'Layout' },
  { link: routes.CardPage, text: 'Card' },
  { link: routes.AccordionPage, text: 'Accordion' },
  { link: routes.ImageListPage, text: 'Image List' },
  { link: routes.NavbarPage, text: 'Navbar' },
  { link: routes.LinkPage, text: 'Link' },
  { link: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
  { link: routes.DrawerPage, text: 'Drawer' },
  { link: routes.SpeedDialPage, text: 'Speed Dial' },
  { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
  { link: routes.AvatarPage, text: 'Avatar' },
];

const expandBreakpoint: Breakpoint = 'md';

const Navbar = () => {
  const isExapanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(true);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' } }}>
        <Box sx={{
          display: { xs: 'none', [expandBreakpoint]: 'flex' },
          alignSelf: 'stretch',
        }}
        >
          {linksData.map(({ link, text }) => (
            <NavbarLink key={link} to={link}>{text}</NavbarLink>
          ))}
        </Box>
        <IconButton
          sx={{
            display: { xs: 'flex', [expandBreakpoint]: 'none' },
          }}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen
            ? <CloseIcon sx={{ color: 'common.white', fontSize: 25 }} />
            : <MenuIcon sx={{ color: 'common.white', fontSize: 25 }} />}
        </IconButton>
        <Drawer
          anchor="top"
          open={drawerOpen && !isExapanded}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: '100vw' }}>
            <Toolbar />
            <MenuList>
              {linksData.map(({ link, text }) => (
                <MenuItem
                  key={link}
                  sx={{
                    p: 0,
                    '&:nth-of-type(2n)': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
                </MenuItem>
              ))}
            </MenuList>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
