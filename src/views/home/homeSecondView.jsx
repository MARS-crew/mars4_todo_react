// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other Views Imports
import CategoryCircle from '../../components/categoryCircle'

function HomeSecondView() {
    const data = ['자기계발', '학업', '여행', '취미', '돈', '가족 친구', '특별한 경험']
    return (
        <Grid container spacing={6}>
            {data.map((item, index) => (
                <Grid xs={12 / 7} item key={index}>
                    <CategoryCircle data={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default HomeSecondView
