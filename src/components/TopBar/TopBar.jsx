import React from "react";
import "./topbar.scss";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import homepage from "../../homepageName";

export default function TopBar() {
  return (
    <Box className='app-topbar'>
      <Box className='app-topbar_item'>
        <Link to={`${homepage}about`} className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
            Про нас
          </Typography>
        </Link>
      </Box>

      <Box className='app-topbar_item'>
        <Link to={`${homepage}payment`}className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
           Оплата
          </Typography>
        </Link>
      </Box>

      <Box className='app-topbar_item'>
        <Link to={`${homepage}delivery`}className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
            Доставка
          </Typography>
        </Link>
      </Box>

      <Box className='app-topbar_item'>
        <Link to={`${homepage}/contacts`} className='app-topbar_item-link'>
          <Typography variant='body1' className='app-topbar_item-text'>
            Контакти
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
