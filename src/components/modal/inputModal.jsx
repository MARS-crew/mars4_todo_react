// ** Mui Imports
import { Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField } from '@mui/material'

function InputModal(props) {
    const { state, closeEvent, message, event, value, onChagne } = props

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
            <DialogContent>
                <TextField fullWidth onChange={onChagne} value={value} />
            </DialogContent>
            <DialogActions>
                <Button onClick={event}>수정</Button>
                <Button onClick={closeEvent}>취소</Button>
            </DialogActions>
        </Dialog>
    )
}

export default InputModal
