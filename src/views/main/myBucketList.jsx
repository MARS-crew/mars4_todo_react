import { Grid } from '@mui/material'
import MyBucketItem from '../../components/myBucketItem'

function MyBucketList(props) {
    const { item } = props

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
