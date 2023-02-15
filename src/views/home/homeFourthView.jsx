// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other View Imports
import BucketList from './components/bucketList'
import SelectList from './components/selectList'

function HomeFourthView() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={7}>
          <BucketList />
        </Grid>
        <Grid item xs={5}>
          <SelectList />
        </Grid>
      </Grid>
    )
}

export default HomeFourthView
