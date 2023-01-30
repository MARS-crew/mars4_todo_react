// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Button, Card, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FirstCard from './fiirstCard'

const S = {
    title: styled.h1``,
    subTitle: styled.h3``,
}

function FirstView() {
    const textArr = [
        '어떻게 사람이!',
        '어떻게 사람이!',
        '어떻게 사람이!',
        '어떻게 사람이!',
        '어떻게 사람이!',
        '어떻게 사람이!',
    ]
    return (
        <Grid container spacing={6} sx={{ py: 10, px: 20 }}>
            <Grid item xs={12}>
                <S.title>저는 ‘술 그만 먹고 다른 것좀 해볼까?’ 라고 생각하는 사람입니다.</S.title>
            </Grid>
            <Grid item xs={12}>
                <S.subTitle>내가 선택한 버킷리스트는?</S.subTitle>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={6}>
                    <Grid item xs={4}>
                        <FirstCard data={textArr} />
                    </Grid>
                    <Grid item xs={4}>
                        <FirstCard data={textArr} />
                    </Grid>
                    <Grid item xs={4}>
                        <FirstCard data={textArr} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FirstView
