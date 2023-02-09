// ** React Imports
import React, { useState, useEffect } from 'react'

// ** Other Views Imports
import MainHeader from '../../components/mainHeader'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/apps/todo'
import { Grid } from '@mui/material'
import MyBucketCards from '../../views/main/myBucketCard'
import MyContainingBucketCard from '../../views/main/myContainingBucketList'
import Color from '../../assets/color'
import MainFirstView from '../../views/main/mainFirstView'

function MainPage() {
    // const [reRenderSwitch, setReRenderSwitch] = useState(false)

    // const dispatch = useDispatch()
    // const { loadingStat, responseData } = useSelector((state) => state.todo)

    // useEffect(() => {
    //     dispatch(fetchData())
    // }, [])

    // useEffect(() => {
    //     if (reRenderSwitch) {
    //         setReRenderSwitch(false)
    //     }

    //     dispatch(fetchData())
    // }, [dispatch, reRenderSwitch])

    return (
        <>
            <MainHeader />
            <Grid container spacing={6}>
                <Grid item xs={12} sx={{ backgroundColor: Color.grey, minHeight: 600 }}>
                    <MainFirstView />
                </Grid>
                <Grid item xs={12} sx={{ mt: -25 }}>
                    <MyBucketCards />
                </Grid>
                <Grid item xs={12}>
                    <MyContainingBucketCard />
                </Grid>
            </Grid>
        </>
    )
}

export default MainPage
