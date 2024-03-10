import { Paper } from '@mui/material'

export default function SliderItem({slide}) {
  return (
    <Paper className='app-slide'
      style={{
        backgroundImage: `url('${slide.image}')`,
        }}>       
      <span className='app-slide_caption'>{slide.caption}</span>
    </Paper>
  )
}