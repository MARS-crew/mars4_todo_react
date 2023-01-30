// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Grid } from '@mui/material'

const S = {
    title: styled.h1``,
    subTitle: styled.h3``,
}


function FirstView() {
    return (
        <Grid container spacing={6} sx={{ py: 10, px: 20 }}>
            <S.title>저는 ‘술 그만 먹고 다른 것좀 해볼까?’ 라고 생각하는 사람입니다.</S.title>
            <br/>
            <S.subTitle>내가 선택한 버킷리스트는?</S.subTitle>
            
        </Grid>
    )
}

export default FirstView
