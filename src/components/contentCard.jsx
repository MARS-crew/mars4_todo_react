// ** Mui Imports
import { Card, CardContent, Typography } from '@mui/material'

function ContentCard(props) {
    const { item } = props

    return (
        <Card sx={{ minWidth: 300, minHeight: 400 }}>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    {item.title}
                </Typography>
                <Typography variant="body2">{item.text}</Typography>
            </CardContent>
        </Card>
    )
}

export default ContentCard
