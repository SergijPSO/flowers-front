import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Box } from '@mui/material'
import homepage from "../../homepageName";
import { Link } from "react-router-dom";

import CartIcon from '../../icons/CartIcon';
import './slider.scss';

export default function Slider() {
  return (
    <Carousel 
    className='app-slider'
    indicators={false}
    interval={19000}
    animation={false}
    swipe={true}>

      <Paper className='app-slide app-slide--first-slide'>
        <Box className='app-slide__left'>
          <span className='app-slide_caption'>Дивуй</span>
          <span className='app-slide_caption'>Вражай</span>
          <span className='app-slide_caption'>Надихай</span>
        </Box>

        <Box className='app-slide__right'>
          <img className='app-slide_image' src={`${homepage}/images/carousel/first.jpg`} alt="slide" />
        </Box>
      </Paper>

      <Paper className='app-slide app-slide--second-slide'>
        <Box className='app-slide__left app-slide__left--muddy-green'>
          <span className='app-slide_caption'>SEND FLOWERS</span>
          <span className='app-slide_text'>Тисни на кнопку та обирай букет тут ↓</span>
          <Link className='app-slide__link' to={homepage}>
              <CartIcon className='app-slide_icon'/>
          </Link>
        </Box>

        <Box className='app-slide__right'>
          <img className='app-slide_image' src={`${homepage}/images/carousel/second.jpg`} alt="slide" />
        </Box>
      </Paper>

    </Carousel>
  )
}
