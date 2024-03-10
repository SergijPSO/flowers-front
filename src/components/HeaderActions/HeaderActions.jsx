import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DeliveryIcon from "../../icons/DeliveryIcon";
import CartIcon from "../../icons/CartIcon";

import "./header-actions.scss";

const HeaderActions = () => {
  return (
    <Box
      className='app-header-actions'
      sx={{ display: "flex", alignItems: "center" }}
    >
      <DeliveryIcon className='app-header-actions_icon' />
      <Typography
        className='app-header-actions_text'
        sx={{
          fontSize: "13px",
          fontWeight: "300",
          marginLeft: "10px",
          marginRight: "4px",
        }}
      >
        БЕЗКОШТОВНО ПО МІСТУ
      </Typography>
      <IconButton className='app-header-actions_button'>
        <CartIcon className='app-header-actions_icon' />
      </IconButton>
    </Box>
  );
};

export default HeaderActions;
