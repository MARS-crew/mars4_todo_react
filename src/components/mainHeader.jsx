// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function MainHeader() {
    return (
        <Grid container spacing={6} sx={{ px: 20, py: 5 }}>
            <Grid item xs={12}>
                <Link to="/">
                    <ArrowBackIcon />
                </Link>
            </Grid>
        </Grid>
    )
}

export default MainHeader
