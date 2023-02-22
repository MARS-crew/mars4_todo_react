import { useState } from 'react'
// ** Mui Imports
import { Grid, Typography } from '@mui/material'

// ** Other Views Imports
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import ContentCard from './components/contentCard'
import ListDivider from './components/listDivider'

// ** Scroll library

function HomeThirdView(props) {
    const data = [
        {
            title: '달리기',
            text: '매일 달리기',
        },
        {
            title: 'TEST2',
            text: 'Hello React',
        },
        {
            title: 'TEST3',
            text: 'Hello React',
        },
        {
            title: 'TEST4',
            text: 'Hello React',
        },
    ]

    return (
      <Grid container>
        <Grid item xs={12} sx={{ mb: 3, pl: 2 }}>
          <Typography variant="h3">{props.thirdViewData}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={3}>
              <ListDivider />
            </Grid>
            <Grid item xs={9} sx={{ mt: -2 }}>
              <ScrollMenu>
                {data?.map((item, index) => (
                  <Grid item xs={4} sx={{ p: 2 }} key={index}>
                    <ContentCard item={item} />
                  </Grid>
                            ))}
              </ScrollMenu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default HomeThirdView
