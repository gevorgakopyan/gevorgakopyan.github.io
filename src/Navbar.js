import { Box } from '@mui/material';
import React from 'react';
import { Link } from '@mui/material';
import styled from '@emotion/styled';

function Navbar() {
  const navItems =
    window.innerWidth > 425
      ? [
          { to: '/', name: 'HOME' },
          { to: '/projects', name: 'PROJECTS' },
          { to: '/experience', name: 'EXPERIENCE' },
          { to: '/about-me', name: 'ABOUT' },
          { to: '/contact-me', name: 'CONTACT' },
        ]
      : [
          { to: '/', name: 'HOME' },
          { to: '/experience', name: 'EXPERIENCE' },
          { to: '/projects', name: 'PROJECTS' },
        ];

  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: '0.8rem',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    zIndex: 2,
  }));

  const currPage =
    '/' +
    window.location.href.split('/')[window.location.href.split('/').length - 1];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        height: '5rem',
      }}
      alignItems={'center'}
    >
      <NavLink href={navItems[0].to}>{navItems[0].name}</NavLink>
      {navItems.slice(1).map((navItem) => {
        console.log(navItem.to);
        return (
          <>
            <hr
              style={{
                width: window.innerWidth > 425 ? '3rem' : '1.5rem',
                border: 'none',
                borderTop: '1px solid #a0a0a0',
                margin: '8px 0',
              }}
            />
            <NavLink
              sx={navItem.to === currPage ? { color: 'white !important' } : {}}
              href={navItem.to}
            >
              {navItem.name}
            </NavLink>
          </>
        );
      })}
    </Box>
  );
}

export default Navbar;
