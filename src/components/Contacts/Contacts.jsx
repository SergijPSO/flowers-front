import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import WhatasAppIcon from "../../icons/WhatasAppIcon";
import ViberIcon from "../../icons/ViberIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import PhoneIcon from "../../icons/PhoneIcon";

import "./contacts.scss";

export default function Contacts() {
  return (
    <Box className='app-middle-bar__contacts'>
      <Link className='app-middle-bar__contacts-phone' to='tel:+380936098180'>
        <PhoneIcon />
        <Typography
          className='app-middle-bar__contacts-phone_number'
          sx={{ fontSize: "18px", fontWeight: "300" }}
        >
          0936098180
        </Typography>
      </Link>

      <Box className='app-middle-bar__contacts-messengers'>
        <Link
          className='app-middle-bar__contacts-messengers_link'
          to='viber://chat?number=+380936098180'
        >
          <ViberIcon />
        </Link>
        <Link
          className='app-middle-bar__contacts-messengers_link'
          to='https://api.whatsapp.com/send?phone=+380936098180'
        >
          <WhatasAppIcon />
        </Link>
        <Link
          className='app-middle-bar__contacts-messengers_link'
          to='https://t.me/+380936098180'
        >
          <TelegramIcon />
        </Link>
      </Box>
    </Box>
  );
}
