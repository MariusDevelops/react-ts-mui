const routes = {
  HomePage: '/',
  TypographyPage: '/typography',
  ButtonPage: '/buttons',
  TextFieldPage: '/textfield',
  SelectPage: '/select',
  RadioButtonPage: '/radiobutton',
  CheckboxPage: '/checkbox',
  SwitchPage: '/switch',
  RatingPage: '/rating',
  AutocompletePage: '/autocomplete',
  LayoutPage: '/layout',
  CardPage: '/card',
  AccordionPage: '/accordion',
  ImageListPage: '/imagelist',
  NavbarPage: '/navbar',
  LinkPage: '/link',
  BreadcrumbsPage: '/breadcrumbs',
  DrawerPage: '/drawer',
  SpeedDialPage: '/speeddial',
  BottomNavigationPage: '/bottomnavigation',
  AvatarPage: '/avatar',
  BadgePage: '/badge',
  ListPage: '/list',
  ChipPage: '/chip',
  TooltipPage: '/tooltip',
  TablePage: '/table',
  AlertPage: '/alert',
  SnackbarPage: '/snackbar',
  DialogPage: '/dialog',
  ProgressPage: '/progress',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
