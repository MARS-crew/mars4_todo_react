import * as React from 'react'
import { Box, Tab, Card, Grid, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { trashData } from '../../api'
import BucketTabItem from '../../components/bucketTabItem'

function MyContainingBucketCard() {
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container sx={{ px: 20, py: 5 }}>
            <Card sx={{ p: 4, borderRadius: 10 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4">버킷리스트 작성</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    {trashData.map((item, index) => (
                                        <Tab label={item.name} value={String(index)} key={index} />
                                    ))}
                                </TabList>
                            </Box>
                            {trashData.map((item, index) => (
                                <TabPanel value={String(index)} key={index}>
                                    <BucketTabItem item={item} />
                                </TabPanel>
                            ))}
                        </TabContext>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MyContainingBucketCard
