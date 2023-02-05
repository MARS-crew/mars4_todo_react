// ** Styled-components Imports
import styled from 'styled-components'

// ** Mui Imports
import { Button, Card, Grid, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const S = {
    title: styled.h1``,
    subTitle: styled.h3``,
    listTitle: styled.h4``,
    list: styled.h5``,
}

function FirstCard(props) {
    const { data } = props

    return (
        <Card sx={{ p: 3 }}>
            <Grid container>
                <Grid item xs={5} sx={{ my: 0.5 }}>
                    <S.subTitle style={{ color: 'blue' }}>{data.title}</S.subTitle>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={4} sx={{ my: 0.5 }}>
                    <Button variant="outlined" sx={{ borderRadius: 30 }}>
                        {data.subTitle}
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ my: 3 }}>
                    <S.subTitle>{data.text}</S.subTitle>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {data?.dataArr?.map((item, index) => (
                            <Grid key={index} container>
                                <Grid item xs={1} sx={{ mr: 1, my: 1 }}>
                                    <CheckCircleIcon style={{ color: '#f7b84b' }} />
                                </Grid>
                                <Grid item xs={7.5} sx={{ my: 1 }}>
                                    <Typography align="justify">{item}</Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ my: 1 }}>
                                    <EditIcon fontSize="small" />
                                </Grid>
                                <Grid item xs={1} sx={{ my: 1 }}>
                                    <DeleteIcon fontSize="small" />
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default FirstCard
