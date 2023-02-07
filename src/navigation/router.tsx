import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import TypographyPage from 'pages/typography-page';
import ButtonPage from 'pages/button-page';
import TextFieldPage from 'pages/text-field-page';
import SelectPage from 'pages/select-page';
import RadioButtonPage from 'pages/radio-button-page';
import CheckboxPage from 'pages/checkbox-page';
import SwitchPage from 'pages/switch-page';
import RatingPage from 'pages/rating-page';
import AutocompletePage from 'pages/autocomplete-page';
import LayoutPage from 'pages/layout-page';
import CardPage from 'pages/card-page';
import AccordionPage from 'pages/accordion-page';
import ImageListPage from 'pages/image-list-page';
import NavbarPage from 'pages/navbar-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <TypographyPage />,
      },
      {
        path: routes.ButtonPage,
        element: <ButtonPage />,
      },
      {
        path: routes.TextFieldPage,
        element: <TextFieldPage />,
      },
      {
        path: routes.SelectPage,
        element: <SelectPage />,
      },
      {
        path: routes.RadioButtonPage,
        element: <RadioButtonPage />,
      },
      {
        path: routes.CheckboxPage,
        element: <CheckboxPage />,
      },
      {
        path: routes.SwitchPage,
        element: <SwitchPage />,
      },
      {
        path: routes.RatingPage,
        element: <RatingPage />,
      },
      {
        path: routes.AutocompletePage,
        element: <AutocompletePage />,
      },
      {
        path: routes.LayoutPage,
        element: <LayoutPage />,
      },
      {
        path: routes.CardPage,
        element: <CardPage />,
      },
      {
        path: routes.AccordionPage,
        element: <AccordionPage />,
      },
      {
        path: routes.ImageListPage,
        element: <ImageListPage />,
      },
      {
        path: routes.NavbarPage,
        element: <NavbarPage />,
      },
    ],
  },
]);

export default router;
