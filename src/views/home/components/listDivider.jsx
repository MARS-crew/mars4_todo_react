// ** React Imports
import React, { useState } from 'react'

// ** Mui Imports
import { ListItemButton, ListItemText, List, makeStyles } from '@mui/material'
import { createTheme, fontWeight, padding } from '@mui/system'

function ListDivider() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (index) => {
        setSelectedIndex(index)
    }

  
    return (
        <List sx={{ minWidth: 300, minHeight: 400, bgcolor: 'background.paper', p: 0 }}>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick(0)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText  primary="#운동" sx={{ textAlign: 'center' }}  />
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick(1)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="#공부"  sx={{ textAlign: 'center' }}/>
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick(2)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="#다이어트"  sx={{ textAlign: 'center' }}/>
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 3}
                onClick={() => handleListItemClick(3)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="#독서" sx={{ textAlign: 'center' }}/>
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick(4)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="Spam" sx={{ textAlign: 'center' }}/>
            </ListItemButton>
        </List>
    )
}

export default ListDivider
