// ** Scroll library
import Carousel from 'react-material-ui-carousel'

// ** Mui Imports
import { Card, Grid } from '@mui/material'

function HomeFirstView() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Carousel
            interval={3000}
            animation="slide"
            indicators={false}
            navButtonsAlwaysInvisible
          >
            <Grid item xs={12}>
              <Card sx={{ width: '100%', height: 300, backgroundColor: 'blue' }} />
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ width: '100%', height: 300, backgroundColor: 'red' }} />
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ width: '100%', height: 300, backgroundColor: 'green' }} />
            </Grid>
          </Carousel>
        </Grid>
      </Grid>
    )
}

export default HomeFirstView
