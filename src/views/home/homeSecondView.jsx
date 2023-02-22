// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other Views Imports
import CategoryCircle from './components/categoryCircle'

function HomeSecondView(props) {
    const data = ['자기개발', '학업', '여행', '취미', '돈', '가족 친구', '특별한 경험']
    const clickData = (data) => {
      props.indexViewData(data)
    }
    return (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid xs={12 / 7} item key={index}>
            <CategoryCircle data={item} clickData={clickData}/>
          </Grid>
            ))}
      </Grid>
    )
}

export default HomeSecondView
