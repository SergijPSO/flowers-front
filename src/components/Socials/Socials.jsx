import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Socials = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com/your-facebook-page",
    twitter: "https://www.twitter.com/your-twitter-account",
    instagram: "https://www.instagram.com/your-instagram-account",
  };

  const iconStyle = { color: "#fff" };
  return (
    <>
      <Tooltip title='Facebook' arrow>
        <IconButton
          component='a'
          href={socialLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
          sx={{ paddingLeft: "0px" }}
        >
          <FacebookIcon sx={iconStyle} />
        </IconButton>
      </Tooltip>
      <Tooltip title='Twitter' arrow>
        <IconButton
          component='a'
          href={socialLinks.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <TwitterIcon sx={iconStyle} />
        </IconButton>
      </Tooltip>
      <Tooltip title='Instagram' arrow>
        <IconButton
          component='a'
          href={socialLinks.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon sx={iconStyle} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Socials;
