// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Box, Tab, Card, Grid, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

// ** Trash Data Imports
import { trashData } from '../../api'

// ** Other Views Imports
import BucketTabItem from '../../components/bucketTabItem'

function MyContainingBucketCard() {
    const [value, setValue] = useState(0)

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
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange}>
                                            {trashData.map((item, index) => (
                                                <Tab
                                                    label={`${item.name}(${item.children?.length})`}
                                                    value={index}
                                                    key={index}
                                                />
                                            ))}
                                        </TabList>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ ml: -3 }}>
                                    {trashData.map((item, index) => (
                                        <TabPanel value={index} key={index}>
                                            <BucketTabItem item={item} />
                                        </TabPanel>
                                    ))}
                                </Grid>
                            </Grid>
                        </TabContext>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MyContainingBucketCard
