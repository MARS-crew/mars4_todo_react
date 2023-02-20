// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

function CategoryCircle(props) {
    const { data } = props

    return (
      <Grid container>
        <Grid item xs={12} style={{display: "flex", justifyContent: "center"}}>
          <Card sx={{ borderRadius: 50, width: 100, height: 100 }} />
        </Grid>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <Typography >{data}</Typography>
        </Grid>
      </Grid>
    )
}

export default CategoryCircle
