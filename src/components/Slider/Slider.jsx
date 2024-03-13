import React from 'react';
import Carousel from 'react-material-ui-carousel'
import SliderItem from './SliderItem';
import './slider.scss';

var slides = [
  {
    id: "1",
    image: "/images/carousel/first.jpg",
    caption: `Дивуй Вражай Надихай`
  },
  {
    id: "2",
    image: "/images/carousel/second.jpg",
    caption: `You don't need to have a special occasion to send greetings in the language of flowers`
  }
]

export default function Slider() {
  return (
    <Carousel 
    indicators={false}
    interval={19000}
    animation={false}
    swipe={true}>
      {slides.map( slide => <SliderItem key={slide.id} slide={slide} /> )}
    </Carousel>
  )
}
