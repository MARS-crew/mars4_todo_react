// ** Mui Imports
import { Padding } from '@mui/icons-material'
import { Card, CardContent, CardMedia, createMuiTheme, Divider, Typography } from '@mui/material'
import { border, borderRadius } from '@mui/system'
function ContentCard(props) {
    const { item } = props
    

    return (
        <Card sx={{ minWidth: 300, maxHeight: 400 }}>
            <CardMedia sx={{height:200}}
                className={"MuiCardMedia"}
                image={"https://cdn.pixabay.com/photo/2022/11/15/06/35/night-7593233_960_720.jpg"}
            />
            <CardContent>
                <Typography
                    fontWeight={900}
                    fontSize={24}
                    className={'MuiTypography--heading'}
                    variant={'h5'}
                    gutterBottom>달리기
                    </Typography>
                <Typography
                    color ='grey'
                    lineHeight={1.8}
                    fontSize={12}
                    class name = {'MuiTypography --subheading'}
                    varient={"caption"}
                    >
                        이번년도 새해에 운동해야지!<br/>다짐하고 헬스장을 끊었는데 <br/>혹시 몇번이나 가셨을까요?<br/> 
                        만약 헬스장이 아닌<br/>다른 운동방법으로 <br/>건강한 몸을 얻을 수 있다면?
                    </Typography>

            </CardContent>
        </Card>
    )
}

export default ContentCard