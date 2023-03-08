// ** Mui Imports
import { Card, CardContent, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutline from '@mui/icons-material/DeleteOutline';

function SelectList() {
    return (
        <Card sx={{ minHeight: 800 }}>
            <CardContent>
                <div style={{display:"block"}}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    건강한 몸 만들기 #운동
                </Typography>
                <Typography variant="body2">건강한 몸 만들기 #운동</Typography>
                <IconButton aria-label="deleteOutline" color="success">
                <deleteOutline />
                </IconButton>
                <Button 
                variant="contained" 
                fullWidth={true} 
                >저장하기</Button>
                </div>
            </CardContent>
        </Card>

      <Card sx={{ minHeight: 800 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            건강한 몸 만들기#운동
          </Typography>
          <Typography variant="body2">건강한 몸 만들기#운동</Typography>
        </CardContent>
      </Card>
>>>>>>> 61aab6322a1e7b7d38374827dbf6ca8c8f916660
    )
}

export default SelectList
