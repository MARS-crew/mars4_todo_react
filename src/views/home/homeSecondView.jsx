// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other Views Imports
import CategoryCircle from './components/categoryCircle'

function HomeSecondView(props) {
  '자기개발', '학업', '여행', '취미', '돈', '가족 친구', '특별한 경험'
    const data = [
      {
      name: '자기개발',
      img: 'https://d32gkk464bsqbe.cloudfront.net/LHvcGRwHcbyGRiMA7k3fgDoyBRI=/1000x600/contents/o/3e72b8a49bee5822f62193c8c3e83218d39a8cae.jpeg'
      },
      {
        name: '학업',
        img: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg'
      },
      {
        name: '여행',
        img: 'https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_960_720.jpg'
      },
      {
        name: '취미',
        img: 'https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513_960_720.jpg'
      },
      {
        name: '돈',
        img: 'https://cdn.pixabay.com/photo/2016/06/01/08/40/money-1428587__340.jpg'
      },
      {
        name: '가족 친구',
        img: 'https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg'
      },
      {
        name: '특별한 경험',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/08/47/bonding-1868513_960_720.jpg'
      },
      ]
    
    const clickData = (data) => {
      props.indexViewData(data.name)
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
