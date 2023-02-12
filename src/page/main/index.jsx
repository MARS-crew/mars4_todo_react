// ** React Imports
import React from 'react'

// ** Other Views Imports
import MainHeader from '../../components/mainHeader'
import MainFirstView from '../../views/main/mainFirstView'
import MyBucketCards from '../../views/main/myBucketCard'
import MyContainingBucketCard from '../../views/main/myContainingBucketList'

// ** Mui Imports
import { Grid } from '@mui/material'

// ** Assets Imports
import Color from '../../assets/color'

function MainPage() {
    return (
        <>
            <MainHeader />
            <Grid container spacing={6}>
                <Grid item xs={12} sx={{ backgroundColor: Color.grey, minHeight: 600 }}>
                    <MainFirstView />
                </Grid>
                <Grid container sx={{ px: 20, py: 5, minHeight: 400 }}>
                    <Grid item xs={12}>
                        <MyBucketCards />
                    </Grid>
                    <Grid item xs={12}>
                        <MyContainingBucketCard />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default MainPage
