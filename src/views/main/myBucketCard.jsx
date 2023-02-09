// ** Mui Imports
import { Button, Card, Grid, TextField, Typography } from '@mui/material'
import MyBucketList from './myBucketList'

// ** Scroll library
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import ContentCard from '../../components/contentCard'

function MyBucketCard() {
    const data = [1, 2, 3, 4, 5]
    return (
        <Grid container sx={{ px: 20, py: 5 }}>
            <Card sx={{ p: 4, borderRadius: 10 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4">버킷리스트 작성</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item xs={2}>
                        <Button fullWidth variant="contained">
                            수정
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">내 버킷리스트</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ScrollMenu>
                            {data?.map((item, index) => (
                                <Grid item xs={4} sx={{ p: 2 }} key={index}>
                                    <MyBucketList />
                                </Grid>
                            ))}
                        </ScrollMenu>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MyBucketCard
