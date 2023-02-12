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
import LinkPage from 'pages/link-page';
import BreadcrumbsPage from 'pages/breadcrumbs-page';
import DrawerPage from 'pages/drawer-page';
import SpeedDialPage from 'pages/speed-dial-page';
import BottomNavigationPage from 'pages/bottom-navigation-page';
import AvatarPage from 'pages/avatar-page';
import BadgePage from 'pages/badge-page';
import ListPage from 'pages/list-page';
import ChipPage from 'pages/chip-page';
import TooltipPage from 'pages/tooltip-page';
import TablePage from 'pages/table-pages';
import AlertPage from 'pages/alert-page';
import SnackbarPage from 'pages/snackbar-page';
import DialogPage from 'pages/dialog-page';
import ProgressPage from 'pages/progress-page';
import SkeletonPage from 'pages/skeleton-page';
import LoadingButtonPage from 'pages/loading-button-page';
import DateTimePickerPage from 'pages/date-time-picker-page';
import DateRangePickerPage from 'pages/date-range-picker';
import TabsPage from 'pages/tabs-page';
import TimelinePage from 'pages/timeline-page';
import MasonryPage from 'pages/masonry-page';
import ResponsivenessPage from 'pages/responsiveness-page';
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
      {
        path: routes.LinkPage,
        element: <LinkPage />,
      },
      {
        path: routes.BreadcrumbsPage,
        element: <BreadcrumbsPage />,
      },
      {
        path: routes.DrawerPage,
        element: <DrawerPage />,
      },
      {
        path: routes.SpeedDialPage,
        element: <SpeedDialPage />,
      },
      {
        path: routes.BottomNavigationPage,
        element: <BottomNavigationPage />,
      },
      {
        path: routes.AvatarPage,
        element: <AvatarPage />,
      },
      {
        path: routes.BadgePage,
        element: <BadgePage />,
      },
      {
        path: routes.ListPage,
        element: <ListPage />,
      },
      {
        path: routes.ChipPage,
        element: <ChipPage />,
      },
      {
        path: routes.TooltipPage,
        element: <TooltipPage />,
      },
      {
        path: routes.TablePage,
        element: <TablePage />,
      },
      {
        path: routes.AlertPage,
        element: <AlertPage />,
      },
      {
        path: routes.SnackbarPage,
        element: <SnackbarPage />,
      },
      {
        path: routes.DialogPage,
        element: <DialogPage />,
      },
      {
        path: routes.ProgressPage,
        element: <ProgressPage />,
      },
      {
        path: routes.SkeletonPage,
        element: <SkeletonPage />,
      },
      {
        path: routes.LoadingButtonPage,
        element: <LoadingButtonPage />,
      },
      {
        path: routes.DateTimePickerPage,
        element: <DateTimePickerPage />,
      },
      {
        path: routes.DateRangePickerPage,
        element: <DateRangePickerPage />,
      },
      {
        path: routes.TabsPage,
        element: <TabsPage />,
      },
      {
        path: routes.TimelinePage,
        element: <TimelinePage />,
      },
      {
        path: routes.MasonryPage,
        element: <MasonryPage />,
      },
      {
        path: routes.ResponsivenessPage,
        element: <ResponsivenessPage />,
      },
    ],
  },
]);

export default router;
