// ** React Imports
import React, { useState } from 'react'

// ** Mui Imports
import {
 ListItemButton, ListItemText, List, makeStyles, Typography,
} from '@mui/material'
import { createTheme, fontWeight, padding } from '@mui/system'

function ListDivider() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (index) => {
        setSelectedIndex(index)
    }

    return (
      <List sx={{
 minWidth: 300, minHeight: 400, bgcolor: 'background.paper', p: 0,
}}
      >
        <ListItemButton
          divider
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
          sx={{ minHeight: 100 }}
        >
          <ListItemText
            disableTypography
            primary={(
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                #운동
              </Typography>
                      )}
          />
        </ListItemButton>
        <ListItemButton
          divider
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
          sx={{ minHeight: 100 }}
        >
          <ListItemText
            disableTypography
            primary={(
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                #공부
              </Typography>
                      )}
          />
        </ListItemButton>
        <ListItemButton
          divider
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
          sx={{ minHeight: 100 }}
        >
          <ListItemText
            disableTypography
            primary={(
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                #다이어트
              </Typography>
                      )}
          />
        </ListItemButton>
        <ListItemButton
          divider
          selected={selectedIndex === 3}
          onClick={() => handleListItemClick(3)}
          sx={{ minHeight: 100 }}
        >
          <ListItemText
            disableTypography
            primary={(
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                #독서
              </Typography>
                      )}
          />
        </ListItemButton>
      </List>
    )
}

export default ListDivider
