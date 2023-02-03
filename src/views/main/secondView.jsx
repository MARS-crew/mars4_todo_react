// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Grid, Typography } from '@mui/material'
import SecondCard from './SecondCard'

const data = [
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },

    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
    {
        title: '14-16',
        subTitle: '나는 뭐하고 살까? 궁금해',
        text: '돈 많은 백수 할래',
    },
]

function SecondView() {
    return (
        <Grid container spacing={6} sx={{ py: 10, px: 20 }}>
            <Grid item xs={12}>
                <Typography>나는 _____ 라고 생각하는 사람입니다! (단일선택)</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={6}>
                    {data.slice(-data.length / 2).map((item, index) => (
                        <Grid item xs={3} key={index}>
                            <SecondCard data={item} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={6}>
                    {data.slice(data.length / 2).map((item, index) => (
                        <Grid item xs={3} key={index}>
                            <SecondCard data={item} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SecondView
