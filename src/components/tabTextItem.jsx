// ** Mui Imports
import { Grid, Typography, Button } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

function TabTextItem(props) {
    const { item, index } = props

    const handleDeleteOpen = () => {}

    return (
        <Grid container spacing={6}>
            <Grid item xs={1}>
                <Typography>{index + 1}</Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography>{item.name}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button>
                    <DeleteOutlineIcon onClick={handleDeleteOpen} />
                </Button>
            </Grid>
        </Grid>
    )
}

export default TabTextItem
