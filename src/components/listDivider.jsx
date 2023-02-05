// ** React Imports
import React, { useState } from 'react'

// ** Mui Imports
import { ListItemButton, ListItemText, List } from '@mui/material'

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
                <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick(1)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick(2)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="Trash" />
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 3}
                onClick={() => handleListItemClick(3)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="Spam" />
            </ListItemButton>
            <ListItemButton
                divider={true}
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick(4)}
                sx={{ minHeight: 80 }}
            >
                <ListItemText primary="Spam" />
            </ListItemButton>
        </List>
    )
}

export default ListDivider
