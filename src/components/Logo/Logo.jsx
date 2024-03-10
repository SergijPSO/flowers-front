import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import "./logo.scss";

function Logo() {
  return (
    <div className='app-logo'>
      <Avatar
        alt='logo'
        className='app-logo_image'
        src='./images/logo.png'
        sx={{ marginRight: "12px", width: "80px", height: "60px" }}
      />

      <Box className='app-logo_text'>
        <Typography className='app-logo_name' variant='span'>
          BLOOM-ROOM
        </Typography>

        <Typography className='app-logo_slogan' variant='span'>
          КВІТКОВА ПОШТА
        </Typography>
      </Box>
    </div>
  );
}

export default Logo;
