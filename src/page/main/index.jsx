// ** React Imports
import React from 'react'

// ** Other Views Imports
import MainHeader from '../../views/main/mainHeader'
import MainFirstView from '../../views/main/mainFirstView'
import MainSecondView from '../../views/main/mainSecondView'
import MainThirdView from '../../views/main/mainThirdView'

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
                        <MainSecondView />
                    </Grid>
                    <Grid item xs={12}>
                        <MainThirdView />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default MainPage
