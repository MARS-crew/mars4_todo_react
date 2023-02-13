// ** Mui Imports
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'

function BasicModal(props) {
    const { state, closeEvent, message } = props

    return (
        <Dialog
            open={state}
            disableEscapeKeyDown
            onClose={(event, reason) => {
                if (reason !== 'backdropClick') {
                    closeEvent()
                }
            }}
        >
            <DialogTitle>{message}</DialogTitle>
            <DialogActions>
                <Button onClick={closeEvent}>확인</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BasicModal