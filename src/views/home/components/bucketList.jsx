// ** Mui Imports
import { Card, CardContent, Typography } from '@mui/material'

// ** Other Views Imports
import BucketItem from './bucketItem'

function BucketList() {
    return (
        <Card sx={{ minHeight: 800 }}>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    건강한 몸 만들기#운동
                </Typography>
                <BucketItem />
            </CardContent>
        </Card>
    )
}

export default BucketList
