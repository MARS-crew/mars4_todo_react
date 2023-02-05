// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Grid } from '@mui/material'
import { Button, Card } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import FirstCard from './fiirstCard'

const S = {
    title: styled.h1``,
    subTitle: styled.h3``,
    list: styled.h4``,
}

function FirstView() {
    const textArr = [
        {
            title: '다이어트',
            subTitle: '20대 초',
            text: '하루 12시간 공복 지키는 법',
            dataArr: [
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
            ],
        },
        {
            title: '어떻게 지내니?',
            subTitle: '어떻게 지내니?',
            text: '어떻게 지내니?',
            dataArr: [
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
            ],
        },
        {
            title: '어떻게 지내니?',
            subTitle: '어떻게 지내니?',
            text: '어떻게 지내니?',
            dataArr: [
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
                '어떻게 지내니?',
            ],
        },
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
                    {textArr.map((item, index) => (
                        <Grid item xs={4} key={index}>
                            <FirstCard data={item} name="" />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FirstView
