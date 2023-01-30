// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Button, Card, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const S = {
    title: styled.h1``,
    subTitle: styled.h3``,
}

function FirstCard(props) {
    const { data: textArr } = props
    return (
        <Card sx={{ p: 3 }}>
            <Grid container>
                <Grid item xs={5}>
                    <S.subTitle>다이어트</S.subTitle>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5}>
                    <Button>20대 초</Button>
                </Grid>
                <Grid item xs={12} sx={{ m: 3 }}>
                    <S.subTitle>하루 12시간 공백을 지키는 방법</S.subTitle>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {textArr.map((item, index) => (
                            <>
                                <Grid item xs={3} sx={{ my: 1 }}>
                                    <CheckCircleIcon />
                                </Grid>
                                <Grid item xs={6} sx={{ my: 1 }}>
                                    <S.subTitle>{item}</S.subTitle>
                                </Grid>
                                <Grid item xs={1.5} sx={{ my: 1 }}>
                                    <DeleteIcon />
                                </Grid>
                                <Grid item xs={1.5} sx={{ my: 1 }}>
                                    <EditIcon />
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default FirstCard
