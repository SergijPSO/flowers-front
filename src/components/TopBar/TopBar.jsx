import React from "react";
import "./topbar.scss";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <Box className='app-topbar'>
      <Box className='app-topbar_item'>
        <Link to='/about' className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
            Про нас
          </Typography>
        </Link>
      </Box>

      <Box className='app-topbar_item'>
        <Link to='/payment-&-delivery' className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
            Доставка і оплата
          </Typography>
        </Link>
      </Box>

      <Box className='app-topbar_item'>
        <Link to='/contacts' className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
            Контакти
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
