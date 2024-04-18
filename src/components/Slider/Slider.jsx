import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Box } from '@mui/material'
import homepage from "../../homepageName";

import './slider.scss';

export default function Slider() {
  return (
    <Carousel 
    className='app-slider'
    indicators={false}
    interval={19000}
    animation={false}
    swipe={true}
    autoPlay={false}>

      <Paper className='app-slide app-slide--first-slide'>
        <Box className='app-slide__left'>
          <span className='app-slide_caption'>Дивуй</span>
          <span className='app-slide_caption'>Вражай</span>
          <span className='app-slide_caption'>Надихай</span>
        </Box>

        <Box className='app-slide__right'>
          <img className='app-slide_image' src={`${homepage}images/carousel/first.jpg`} alt="slide" />
        </Box>
      </Paper>

      <Paper className='app-slide app-slide--second-slide'>
        <Box className='app-slide__left app-slide__left--muddy-green'>
          <div className="app-slide__left-content">
              <span className='app-slide_text'>
                У КВІТІВ
                не буває буднів,
                <br/> вони завжди одягнені
              </span>
            <span className='app-slide_caption'>СВЯТКОВО</span>
          </div>
          <span className='app-quote'>© Малькольм де Шазаль</span>
        </Box>

        <Box className='app-slide__right'>
          <img className='app-slide_image' src={`${homepage}images/carousel/second.jpg`} alt="slide" />
        </Box>
      </Paper>

    </Carousel>
  )
}
