// ** React Imports
import React from 'react'

// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other Views Imports
import HomeFirstView from '../../views/home/homeFirstView'
import HomeFourthView from '../../views/home/homeFourthView'
import HomeSecondView from '../../views/home/HomeSecondView'
import HomeThirdView from '../../views/home/homeThirdView'
import HomeHeader from '../../views/home/homeHeader'

function HomePage() {
    return (
        <>
            <HomeHeader />
            <Grid container spacing={6} sx={{ px: 20, py: 5, minHeight: 400 }}>
                <Grid item xs={12} sx={{ mb: 20 }}>
                    <HomeFirstView />
                </Grid>
                <Grid item xs={12} sx={{ mb: 20 }}>
                    <HomeSecondView />
                </Grid>
                <Grid item xs={12} sx={{ mb: 20 }}>
                    <HomeThirdView />
                </Grid>
                <Grid item xs={12} sx={{ mb: 20 }}>
                    <HomeFourthView />
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage
