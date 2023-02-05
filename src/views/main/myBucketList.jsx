import { Grid } from '@mui/material'
import MyBucketItem from '../../components/myBucketItem'

// ** Scroll library
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

function MyBucketList() {
    return (
        <Grid container spacing={3} sx={{ minWidth: 463 }}>
            <Grid item xs={12}>
                <MyBucketItem />
            </Grid>
            <Grid item xs={12}>
                <MyBucketItem />
            </Grid>
            <Grid item xs={12}>
                <MyBucketItem />
            </Grid>
            <Grid item xs={12}>
                <MyBucketItem />
            </Grid>
            <Grid item xs={12}>
                <MyBucketItem />
            </Grid>
            <Grid item xs={12}>
                <MyBucketItem />
            </Grid>
        </Grid>
    )
}

export default MyBucketList
