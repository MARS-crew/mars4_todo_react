// ** Mui Imports
import { Padding } from '@mui/icons-material'
import { Card, CardContent, Typography } from '@mui/material'
import { border, borderRadius } from '@mui/system'
function ContentCard(props) {
    const { item } = props
    

    return (
        <Card sx={{ minWidth: 300, minHeight: 400 }}>
            <CardContent>
                
                <Typography variant="h5" sx={{ mb: 2 }}>
                    {item.title}
                </Typography>
                <img src= 'activity.jpg' width={260} />
                <Typography variant="body2">{item.text}</Typography>
            </CardContent>
        </Card>
    )
}

export default ContentCard
