// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

function CategoryCircle(props) {
    const { data } = props
    const clickHandler=() => {
        props.clickData(data)
    }

    return (
      <Grid container>
        <Grid item xs={12} style={{display: "flex", justifyContent: "center"}}>
          <Card sx={{ borderRadius: 50, width: 125, height: 125 }}
            onClick={clickHandler}
            >
            </Card>
          
        </Grid>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <Typography variant='h6'>{data}</Typography>
        </Grid>
      </Grid>
    )
}

export default CategoryCircle
