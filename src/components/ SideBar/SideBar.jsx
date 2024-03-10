import React, { useState } from "react";
import { Drawer, Typography, Box } from "@mui/material";

export default function SideBar() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Drawer anchor='left' open={opened} onClose={() => setOpened(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h5' component='div'>
            SideBAr panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
