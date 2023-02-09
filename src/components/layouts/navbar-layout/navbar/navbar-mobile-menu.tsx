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
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  let activeGroupTitle: string | false = false;
  for (let i = 0; i < linksGroups.length; i += 1) {
    const linksGroup = linksGroups[i];
    const hasActiveLink = linksGroup.linksData
      .map<string>(({ link }) => link)
      .includes(pathname);

    if (hasActiveLink) {
      activeGroupTitle = linksGroup.title;
      break;
    }
  }

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  const [
    openedAccordionTitle,
    setOpenedAccordionTitle,
  ] = React.useState<string | false>(activeGroupTitle);

  const closeMenu = () => setMenuOpen(false);
  const handleAccordionAction = (groupTitle: string) => (
    event: React.SyntheticEvent,
    accordionOpen: boolean,
  ) => {
    setOpenedAccordionTitle(accordionOpen ? groupTitle : false);
  };

  return (
    <>
      <IconButton
        sx={{ display: { xs: 'flex', [expandBreakpoint]: 'none' } }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen
          ? <CloseIcon sx={{ color: 'common.white', fontSize: 25 }} />
          : <MenuIcon sx={{ color: 'common.white', fontSize: 25 }} />}
      </IconButton>
      <Drawer
        anchor="top"
        open={menuOpen && !isExpanded}
        onClose={() => setMenuOpen(false)}
      >
        <Box>
          <Toolbar />
          <MenuList sx={{ p: 0 }}>
            {linksData.map(({ link, text }) => (
              <MenuItem key={link} onClick={closeMenu} sx={{ p: 0 }}>
                <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
              </MenuItem>
            ))}
            {linksGroups.map((linksGroup) => (
              <NavbarMobileLinksAccordion
                key={linksGroup.title}
                title={linksGroup.title}
                linksData={linksGroup.linksData}
                closeMenu={closeMenu}
                expanded={openedAccordionTitle === linksGroup.title}
                onChange={handleAccordionAction(linksGroup.title)}
                hasActiveLink={activeGroupTitle === linksGroup.title}
              />
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
