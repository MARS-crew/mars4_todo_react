// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Grid, Typography } from '@mui/material'

function HomeHeader() {
    return (
      <Grid container spacing={6} sx={{ px: 20, py: 5 }} style={{display: "flex", alignItems: "center"}}>
        <Grid item xs={4}>
          <Typography variant="h3">BucketList</Typography>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <Link to="/main">
            <Typography variant='h6'>버킷리스트 관리</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/login">
            <Typography variant='h6'>로그인</Typography>
          </Link>
        </Grid>
      </Grid>
    )
}

export default HomeHeader
