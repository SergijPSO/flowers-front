import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  ThemeProvider,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { overrides } from '../../styles';

const theme = createTheme(overrides);

const Banner = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        marginTop: '76px',
        padding: '40px',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '48%' },
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <img
          src='/images/banner-cat1.png'
          alt='cat'
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '48%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '30px 0 20px',
        }}
      >
        <Typography variant='h4'>Our </Typography>
        <Typography variant='h3'>Help Animals</Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, illum
          eaque hic sequi ipsa dolores nihil? Ab quae quos minima omnis nobis
          reprehenderit sint reiciendis possimus non a! Aliquid, ex.
        </Typography>

        <ThemeProvider theme={theme}>
          <Button variant='contained'>
            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
              Donate
            </Typography>
          </Button>
        </ThemeProvider>
      </Box>
    </Container>
  );
};

export default Banner;
