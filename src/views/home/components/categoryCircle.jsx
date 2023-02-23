// ** Mui Imports
import { Card, Grid, CardMedia, Typography } from '@mui/material'

function CategoryCircle(props) {
    const { data } = props
    const clickHandler=() => {
        props.clickData(data)
    }

    return (
      <Grid container>
        <Grid item xs={12} style={{display: "flex", justifyContent: "center"}}>
          <Card sx={{ borderRadius: 50, width: 150, height: 150 }}
            onClick={clickHandler}
            >
              <CardMedia
              sx={{ height: 150 }}
              image ={data.img}
              />
            </Card>
          
        </Grid>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <Typography variant='h6'>{data.name}</Typography>
        </Grid>
      </Grid>
    )
}

export default CategoryCircle
