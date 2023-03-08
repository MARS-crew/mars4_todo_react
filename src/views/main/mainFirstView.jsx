import { Typography, Grid } from '@mui/material'
import { useSelector } from 'react-redux'

function MainFirstView() {
    const { name } = useSelector((state) => state.user)

    return (
      <Grid container spacing={2} sx={{ px: 20, py: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h3">안녕하세요!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
            {name}
            님!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">자신만의 버킷리스트를 채워주세요.</Typography>
        </Grid>
      </Grid>
    )
}

export default MainFirstView
