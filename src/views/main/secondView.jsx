// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Grid } from '@mui/material'

const S = {
    title: styled.h1``,
}

function SecondView() {
    return (
        <Grid container spacing={6} sx={{ py: 10, px: 20 }}>
            <S.title>나는 _____ 라고 생각하는 사람입니다! (단일선택)</S.title>
        </Grid>
    )
}

export default SecondView
