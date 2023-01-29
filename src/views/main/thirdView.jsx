// ** Mui Imports
import { Card, Grid } from '@mui/material'

function ThirdView() {
    return (
        <Grid container spacing={6} sx={{ py: 10, px: 20 }}>
            <Grid item xs={4}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card sx={{ height: 300 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 70 }}>Helloo</Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card sx={{ height: 70 }}>Helloo</Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ height: 300 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Card sx={{ height: 300 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 300 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ height: 150 }}>Helloo</Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThirdView
