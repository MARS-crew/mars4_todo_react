import * as React from 'react'
import { Box, Tab, Card, Grid, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

function BucketTabItem(props) {
    const { item: data } = props
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <TabContext value={data}>
            <Box>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    {data.children.map((item, index) => {
                        console.log('item2', index, item)
                        return <Tab label={item.name} value={index} key={index} />
                    })}
                </TabList>
            </Box>
            {data.children.map((item, index) => {
                console.log('item3', index, item)
                return (
                    <TabPanel value={index} key={index}>
                        <Typography>
                            아침에 일어나서 10분 명상, 20분 초보요가 자세 8주간 따라하기
                        </Typography>
                    </TabPanel>
                )
            })}
        </TabContext>
    )
}

export default BucketTabItem
