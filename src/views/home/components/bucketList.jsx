// ** Mui Imports
// ** Other Views Imports
import {
 Card, CardContent, Typography, Box,
} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { Label } from '@mui/icons-material'
import BucketItem from './bucketItem'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function BucketList() {
    return (
      <Card sx={{ minHeight: 800 }}>
        <CardContent>
          <Box
            sx={{
                        color: 'dark',
                        display: 'inline',
                        fontWeight: 'bold',
                        mx: 0.5,
                        fontSize: 30,
                        md: 5,
                    }}
          >
            건강한 몸 만들기
          </Box>
          <Box sx={{
 color: 'text.secondary', display: 'inline', fontSize: 15, md: 5,
}}
          >
            #운동
          </Box>

          <Typography variant="h6" sx={{ mt: 1 }}>
            아침에 30분만 투자하면 30년은 젊어지는 비결
          </Typography>
          <Checkbox {...label} defaultChecked />
          <Typography variant="h8" sx={{ mt: 3 }}>
            아침에 일어나서 10분 명상, 20분 초보요가 자세 8주간 따라하기
          </Typography>
          <br />
          <Checkbox {...label} defaultChecked />
          <Typography variant="h8" sx={{ mt: 3 }}>
            공복 3km런닝 3주, 이후 5km이상 30분 이내 돌파
          </Typography>
          <br />
          <Checkbox {...label} defaultChecked />
          <Typography variant="h8" sx={{ mt: 3 }}>
            더보기를 누르면 한번에 다섯개 정도의 참고 문장을 제공이 목적
          </Typography>
          <br />
          <Typography variant="h6" sx={{ mt: 1 }}>
            밖에 잠깐 나갔다 오는것도 큰 다짐이 필요한 당신에게
          </Typography>
          <br />
          <Typography variant="h6" sx={{ mt: 1 }}>
            그래도 이번년도에는 침대보단 땅을 더 밟아볼까? 하는 당신에게
          </Typography>
          <br />
          <Typography variant="h6" sx={{ mt: 1 }}>
            아침에 30분만 투자하면 30년은 젊어지는 비결
          </Typography>
          <BucketItem />
        </CardContent>
      </Card>
    )
}

export default BucketList
