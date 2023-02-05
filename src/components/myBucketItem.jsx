import { Card, Grid, Typography, Checkbox } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

function MyBucketItem() {
    return (
        <Card>
            <Grid container>
                <Grid item xs={1.5}>
                    <Checkbox />
                </Grid>
                <Grid item xs={7.5} sx={{ justifyContent: 'center' }}>
                    <Typography variant="body2">
                        2023년도 정보처리, 정보보안, 컴활 자격증
                    </Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <DriveFileRenameOutlineIcon />
                </Grid>
                <Grid item xs={1.5}>
                    <DeleteOutlineIcon />
                </Grid>
            </Grid>
        </Card>
    )
}

export default MyBucketItem
