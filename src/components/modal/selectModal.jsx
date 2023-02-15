// ** Mui Imports
import {
 Dialog, DialogTitle, DialogActions, Button,
} from '@mui/material'

function SelectModal(props) {
    const {
 state, closeEvent, message, event,
} = props

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
          <Button onClick={event}>확인</Button>
          <Button onClick={closeEvent}>취소</Button>
        </DialogActions>
      </Dialog>
    )
}

export default SelectModal
