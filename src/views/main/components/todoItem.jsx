// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Card, Grid, Typography, Checkbox, Button } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

// ** Other Views Imports
import BasicModal from '../../../components/modal/basicModal'
import SelectModal from '../../../components/modal/selectModal'
import InputModal from '../../../components/modal/inputModal'

function TodoItem(props) {
    // const { item } = props
    const [text, setText] = useState('')

    const [open, setOpen] = useState(false)
    const [openFalse, setOpenFalse] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    const [messageFalse, setMessgaeFalse] = useState('')

    const handleOpen = () => setOpen(true)
    const handleFalseOpen = () => setOpenFalse(true)
    const handleDeleteOpen = () => setOpenDelete(true)
    const handleClose = () => setOpen(false)
    const handleFalseClose = () => setOpenFalse(false)
    const handleDeleteClose = () => setOpenDelete(false)

    const handleDelete = () => {}

    const modifyContent = () => {}

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card sx={{ minHeight: 60 }}>
            <InputModal
                state={open}
                closeEvent={handleClose}
                message="수정할 내용을 입력하세요."
                event={modifyContent}
                value={text}
                onChange={onChange}
            />
            <SelectModal
                state={openDelete}
                closeEvent={handleDeleteClose}
                message="정말로 삭제하시겠습니까?"
                event={handleDelete}
            />
            <BasicModal state={openFalse} message={messageFalse} closeEvent={handleFalseClose} />
            <Grid container>
                <Grid item xs={1.5}>
                    <Checkbox sx={{ minHeight: 60 }} />
                </Grid>
                <Grid item xs={6.5}>
                    <Typography variant="body2" sx={{ py: 2.5 }}>
                        hello
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={handleOpen} sx={{ minHeight: 60 }}>
                        <DriveFileRenameOutlineIcon />
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button sx={{ minHeight: 60 }}>
                        <DeleteOutlineIcon onClick={handleDeleteOpen} />
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default TodoItem
