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
            <S.title>Fourth Page</S.title>
        </Grid>
    )
}

export default SecondView
