import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" bgcolor="white" justifyContent="space-around" sx={{ gap: { sm : 'px', xs: '-40px' }, mt: { sm: '10px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        bgcolor="white"
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" sx={{ justifyContent: "flex-end" }} style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercies</a>
        <a href="http://localhost:3001/"  style={{ textDecoration: 'none', color: '#3A1212' }}>Store</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
