import { Paper } from '@mui/material'
import homepage from "../../homepageName";

export default function SliderItem({slide}) {
  return (
    <Paper className='app-slide'
      style={{
        backgroundImage: `url('${homepage}${slide.image}')`,
        }}>       
      <span className='app-slide_caption'>{slide.caption}</span>
    </Paper>
  )
}