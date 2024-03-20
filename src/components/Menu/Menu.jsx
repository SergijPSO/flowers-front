import React from "react";
import {Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./menu.scss";

import homepage from "../../homepageName";

const Menu = () => {
  return (
    <Box className='app-header__menu'>
      <Link className='app-header__menu_link' to={`${homepage}classic`}>
        <Typography className='app-header__menu_item'>Класика</Typography>
      </Link>
      <Link className='app-header__menu_link' to={`${homepage}mono`}>
        <Typography className='app-header__menu_item'>Моно-букети</Typography>
      </Link>
      <Link className='app-header__menu_link' to={`${homepage}mixed`}>
        <Typography className='app-header__menu_item'>Мікс-букети</Typography>
      </Link>
      <Link className='app-header__menu_link' to={`${homepage}boxes`}>
        <Typography className='app-header__menu_item'>Мікс-букети</Typography>
      </Link>
      <Link className='app-header__menu_link' to={`${homepage}promo`}>
        <Typography className='app-header__menu_item'>Акційні</Typography>
      </Link>
      <Link className='app-header__menu_link' to={`${homepage}wow`}>
        <Typography className='app-header__menu_item'>Wow-ефект</Typography>
      </Link>
    </Box>
  );
};

export default Menu;
