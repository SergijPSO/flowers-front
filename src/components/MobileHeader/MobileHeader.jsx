import React, { useState } from "react";
import { IconButton } from "@mui/material";
import Logo from "../Logo/Logo";
import CartIcon from "../../icons/CartIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Typography, Box } from "@mui/material";
import DeliveryIcon from "../../icons/DeliveryIcon";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

import "./mobile-header.scss";

const MobileHeader = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <header className='app-mobile-header'>
        <IconButton onClick={() => setOpened(true)}>
          <MenuIcon data-testid='MenuIcon' />
        </IconButton>
        <Logo />
        <IconButton className='app-header-actions_button'>
          <CartIcon className='app-header-actions_icon' />
        </IconButton>
      </header>

      <Drawer
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8px 4px",
        }}
        anchor='left'
        open={opened}
        onClose={() => setOpened(false)}
      >
        <Box className='app-sidebar'>
          <Box className='app-sidebar__wrapper'>
            <Box className='app-sidebar__head'>
              <Logo />
              <Box className='app-sidebar__head-content'>
                <DeliveryIcon className='app-header-actions_icon' />
                <Typography
                  className='app-sidebar_headline'
                  variant='span'
                  component='span'
                >
                   БЕЗКОШТОВНО ПО МІСТУ
                </Typography>
              </Box>
            </Box>
            <Box
              className='app-sidebar__content'
              onClick={() => setOpened(false)}
            >
              <Link className='app-sidebar__menu_link' to='/classic'>
                <Typography className='app-sidebar__menu_text'>
                  Класика
                </Typography>
              </Link>
              <Link className='app-sidebar__menu_link' to='/mono'>
                <Typography className='app-sidebar__menu_text'>
                  Моно-букети
                </Typography>
              </Link>
              <Link className='app-sidebar__menu_link' to='/mixed'>
                <Typography className='app-sidebar__menu_text'>
                  Мікс-букети
                </Typography>
              </Link>
              <Link className='app-sidebar__menu_link' to='/boxes'>
                <Typography className='app-sidebar__menu_text'>
                  Квіти у боксах
                </Typography>
              </Link>
              <Link className='app-sidebar__menu_link' to='/promo'>
                <Typography className='app-sidebar__menu_text'>
                  Акційні
                </Typography>
              </Link>
              <Link className='app-sidebar__menu_link' to='/wow'>
                <Typography className='app-sidebar__menu_text'>
                  Wow-еффект
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className='app-sidebar__footer'>
            <Contacts />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileHeader;
