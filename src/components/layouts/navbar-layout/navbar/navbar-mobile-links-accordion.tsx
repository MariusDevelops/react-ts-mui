import React from 'react';
import {
  MenuList,
  MenuItem,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';
import NavbarMobileLink from './navbar-mobile-link';
import LinkData from './link-data';

type NavbarMobileLinksAccordionProps = {
  title: string,
  linksData: LinkData[],
  closeMenu: VoidFunction
};

const NavbarMobileLinksAccordion: React.FC<NavbarMobileLinksAccordionProps> = ({
  title,
  linksData,
  closeMenu,
}) => {
  const { pathname } = useLocation();
  const hasActiveLink = linksData.map<string>(({ link }) => link).includes(pathname);

  return (
    <Accordion defaultExpanded={hasActiveLink} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={hasActiveLink ? 'primary' : 'inherit'}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MenuList sx={{ p: 0 }}>
          {linksData.map(({ link, text }) => (
            <MenuItem key={link} onClick={closeMenu} sx={{ p: 0 }}>
              <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
            </MenuItem>
          ))}
        </MenuList>
      </AccordionDetails>
    </Accordion>
  );
};

export default NavbarMobileLinksAccordion;
