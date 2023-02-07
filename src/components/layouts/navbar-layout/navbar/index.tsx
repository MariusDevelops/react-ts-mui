import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import routes from 'navigation/routes';
import NavbarLink from './navbar-link';

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
];

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      {linksData.map(({ link, text }) => (
        <NavbarLink key={link} to={link}>{text}</NavbarLink>
      ))}
    </Toolbar>
  </AppBar>
);

export default Navbar;
