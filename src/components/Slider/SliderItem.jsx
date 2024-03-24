import { Paper, Box } from '@mui/material'
import homepage from "../../homepageName";

export default function SliderItem({slide}) {
  return (
    <Paper className='app-slide'>
      
      <Box className='app-slide__left'>
        <span className='app-slide_caption'>{slide.caption}</span>
        <span className='app-slide_text'>{slide?.text}</span>
        {/* <span className="app-slide__icon"></span> */}
      </Box>

      <Box className='app-slide__right'>
        <img className='app-slide_image' src={`${homepage}${slide.image}`} alt="slide" />
      </Box>
     
    </Paper>
  )
}