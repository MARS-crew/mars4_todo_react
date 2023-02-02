import { Typography, Card, CardMedia, CardContent } from '@mui/material'
function SecondCard(props) {
    const { data } = props
    return (
        <Card xs={{ px: 5 }}>
            <CardMedia sx={{ height: 140 }} image="/three.png" title="green iguana" />
            <CardContent>
                <Typography fontSize={3} color="text.secondary">
                    {data.title}
                </Typography>
                <Typography>{data.subTitle}</Typography>
                <Typography fontSize={5} color="text.secondary">
                    {data.text}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default SecondCard
