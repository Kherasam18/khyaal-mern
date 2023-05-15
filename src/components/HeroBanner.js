import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/Intro_website.mp4';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '180px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography sx={{ mt: { lg: '-50px', xs: '70px' } }} color="#FF2625" fontWeight="600" fontSize="26px">Khyaal</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="px">
    India's #1 App <br />
for Senior Citizens
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
    We care for your health, attend free events and enhance your life
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ mt: { lg: '100px', xs: '70px' }, ml:{lg: '350px', xs: '70px' }, opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Khyaal
    </Typography>
    <video autoPlay muted loop className="hero-banner-img" >
      <source src={HeroBannerImage} type="video/mp4"/>
     </video>
  </Box>
);

export default HeroBanner;
