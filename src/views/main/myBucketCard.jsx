// ** Mui Imports
import { Button, Card, Grid, TextField, Typography } from '@mui/material'

// ** Other Views Imports
import MyBucketList from './myBucketList'

// ** Scroll library
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import { saveTodoApi } from '../../api/todo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyBucketItem from '../../components/myBucketItem'
import { fetchData } from '../../store/apps/todo'

function MyBucketCard() {
    const dispatch = useDispatch()
    const { responseData, loadingStat } = useSelector((state) => state.todo)

    const handleAddBucket = async (e) => {
        if (e.key == 'Enter') {
            const { data } = await saveTodoApi(e.target.value)
            console.log(data)
        }
    }

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    console.log(responseData)

    if (loadingStat) return null

    return (
        <Grid container sx={{ px: 20, py: 5 }}>
            <Card sx={{ p: 4, borderRadius: 10 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4">버킷리스트 작성</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onKeyDown={handleAddBucket} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">내 버킷리스트</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <ScrollMenu>
                            <Grid item xs={4} sx={{ p: 2 }}>
                                <MyBucketList />
                            </Grid>
                            <Grid item xs={4} sx={{ p: 2 }}>
                                <MyBucketList />
                            </Grid>
                            <Grid item xs={4} sx={{ p: 2 }}>
                                <MyBucketList />
                            </Grid>
                        </ScrollMenu>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MyBucketCard
