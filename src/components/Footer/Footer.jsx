import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Contacts from "../Contacts/Contacts";
import "./footer.scss";

import homepage from "../../homepageName";

const Footer = () => {
  return (
    <footer className='app-footer' style={{ padding: "40px 0" }}>
      <Container className='app-footer__wrapper'>
        <Box className='app-footer__content'>
          <Box className='app-footer__content-item' item xs={10} sm={6} lg={3}>
            <Typography className='app-footer__content-item_heading'>
              BLOOM-ROOM
            </Typography>

            <Typography className='app-footer__content-item_text'>
               Таємна кімната, де єднаються квіткові барви в одну палітру букета. Передамо Ваші вітання мовою квітів та врахуємо усі побажання & деталі. 
            </Typography>

            <Typography className='app-footer__content-item_text app-footer__content-item_text-motto'>
              Єднаємо емоціями!
            </Typography>
            
          </Box>

          <Box className='app-footer__content-item' item xs={12} sm={6} lg={3}>
            <Typography className='app-footer__content-item_heading'>
              Клієнтам
            </Typography>

            <Typography className='app-footer__content-item_text'>
              <Link
                to={`${homepage}delivery`}  
                className='app-footer__content-item_link'
              >
                Доставка
              </Link>
            </Typography>

            <Typography className='app-footer__content-item_text'>
              <Link
                to={`${homepage}payment`}
                className='app-footer__content-item_link'
              >
                Оплата
              </Link>
            </Typography>

            <Typography className='app-footer__content-item_text'>
              <Link to={`${homepage}contacts`} className='app-footer__content-item_link'>
                Контакти
              </Link>
            </Typography>
          </Box>

          <Box className='app-footer__content-item' item xs={12} sm={6} lg={3}>
            <Typography className='app-footer__content-item_heading'>
              Компанiя
            </Typography>
            <Typography className='app-footer__content-item_text'>
              <Link to={`${homepage}about`} className='app-footer__content-item_link'>
                Про нас
              </Link>
            </Typography>
          </Box>

          <Box className='app-footer__content-item' item xs={12} sm={6} lg={3}>
            <Typography className='app-footer__content-item_heading'>
              Залишайтесь на зв`язку
            </Typography>

            <Typography className='app-footer__content-item_text'>
              Конкати:
            </Typography>
            <Contacts />
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
