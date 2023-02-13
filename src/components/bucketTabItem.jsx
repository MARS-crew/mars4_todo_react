// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Grid, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

// ** Other Views Imports
import TabTextItem from './tabTextItem'

function BucketTabItem(props) {
    const { item: data } = props

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <TabContext value={value}>
            <Grid container>
                <Grid item xs={12}>
                    <TabList onChange={handleChange}>
                        {data.children.map((item, index) => (
                            <Tab
                                label={`#${item.name}(${item.children?.length})`}
                                value={index}
                                key={index}
                            />
                        ))}
                    </TabList>
                </Grid>
                <Grid item xs={12}>
                    {data.children.map((item, index) => (
                        <TabPanel value={index} key={index}>
                            <Grid container spacing={2}>
                                {item.children.map((item, index) => (
                                    <Grid item xs={12}>
                                        <TabTextItem item={item} index={index} key={index} />
                                    </Grid>
                                ))}
                            </Grid>
                        </TabPanel>
                    ))}
                </Grid>
            </Grid>
        </TabContext>
    )
}

export default BucketTabItem
