import React from 'react';
import {
  Toolbar,
  IconButton,
  Box,
  Drawer,
  MenuList,
  MenuItem,
  useMediaQuery,
  type Theme,
  type Breakpoint,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarMobileLink from './navbar-mobile-link';
import LinkData from './link-data';
import NavbarMobileLinksAccordion from './navbar-mobile-links-accordion';

type NavbarMobileMenuProps = {
  expandBreakpoint: Breakpoint,
  linksData: LinkData[],
  linksGroups: {
    title: string,
    linksData: LinkData[],
  }[]
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  expandBreakpoint,
  linksData,
  linksGroups,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));

  return (
    <>
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
        open={drawerOpen && !isExpanded}
        onClose={() => setDrawerOpen(false)}
      >
        <Box>
          <Toolbar />
          <MenuList sx={{ p: 0 }}>
            {linksData.map(({ link, text }) => (
              <MenuItem
                key={link}
                onClick={() => setDrawerOpen(false)}
                sx={{ p: 0 }}
              >
                <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
              </MenuItem>
            ))}
            {linksGroups.map((linksGroup) => (
              <NavbarMobileLinksAccordion
                key={linksGroup.title}
                title={linksGroup.title}
                linksData={linksGroup.linksData}
                closeDrawer={() => setDrawerOpen(false)}
              />
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
