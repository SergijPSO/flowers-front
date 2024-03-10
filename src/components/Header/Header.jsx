import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Menu from "../Menu/Menu";
import TopBar from "../TopBar/TopBar";
import MiddleBar from "../MiddleBar/MiddleBar";

import "./header.scss";

const Header = () => {
  const theme = useTheme();
  return (
    <Box className='app-header'>
      <TopBar />
      <MiddleBar />
      <Menu />
    </Box>
  );
};

export default Header;
