// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Color from '../../assets/color'

function MainHeader() {
    return (
        <Grid container spacing={6} sx={{ px: 10, py: 5, backgroundColor: Color.grey }}>
            <Grid item xs={12}>
                <Link to="/">
                    <ArrowBackIcon />
                </Link>
            </Grid>
        </Grid>
    )
}

export default MainHeader
