// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import {
    Card,
    Grid,
    Typography,
    Checkbox,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
} from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

function MyBucketItem(props) {
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
            <Dialog
                open={open}
                disableEscapeKeyDown
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose()
                    }
                }}
            >
                <DialogTitle>수정할 내용을 입력하세요.</DialogTitle>
                <DialogContent>
                    <TextField fullWidth onChange={onChange} value={text} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={modifyContent}>수정</Button>
                    <Button onClick={handleClose}>취소</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openDelete}
                disableEscapeKeyDown
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDeleteClose()
                    }
                }}
            >
                <DialogTitle>정말로 삭제하시겠습니까?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleDelete}>확인</Button>
                    <Button onClick={handleDeleteClose}>취소</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openFalse}
                disableEscapeKeyDown
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleFalseClose()
                    }
                }}
            >
                <DialogTitle>{messageFalse}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleFalseClose}>확인</Button>
                </DialogActions>
            </Dialog>
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

export default MyBucketItem
