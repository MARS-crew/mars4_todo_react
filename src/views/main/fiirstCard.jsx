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
    listTitle: styled.h4``,
    list:styled.h5``,
}

function FirstCard(props) {
    const { data: textArr } = props
    return (
        <Card sx={{ p: 3 }}>
            <Grid container>
                <Grid item xs={5}>
                    <S.subTitle style={{color:'blue'}}>다이어트</S.subTitle>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={4}>
                    <Button variant='outlined' >20대 초</Button>
                </Grid>
                <Grid item xs={12} sx={{ m: 3 }}>
                    <S.subTitle>하루 12시간 공백을 지키는 방법</S.subTitle>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {textArr.map((item, index) => (
                            <>
                                <Grid item xs={1.5} sx={{ my: 1 }}>
                                    <CheckCircleIcon style={{color: '#f7b84b'}} />
                                    
                                </Grid>
                                <Grid item xs={8.5} sx={{ my: 1 }}>
                                    <S.list>{item}</S.list>
                                </Grid>
                                <Grid item xs={1} sx={{ my: 1 }}>
                                    <EditIcon />
                                </Grid>
                                <Grid item xs={1} sx={{ my: 1 }}>
                                    <DeleteIcon />
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
