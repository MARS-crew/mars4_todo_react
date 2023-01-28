/* eslint-disable */

// ** React Imports
import React, { useState } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// // ** Api Imports
import { registerApi } from '../../api/auth'

// ** Mui Imports
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'

const theme = createTheme()

function RegisterPage() {
    const [user, setUser] = useState({ id: '', password: '', name: '' })
    const [passwordC, setPasswordC] = useState('')

    const [open, setOpen] = useState(false)
    const [openFalse, setOpenFalse] = useState(false)

    const [message, setMessgae] = useState('회원가입을 성공하였습니다.')
    const [messageFalse, setMessgaeFalse] = useState('')

    const navigate = useNavigate()

    const handleOpen = () => setOpen(true)
    const handleFalseOpen = () => setOpenFalse(true)
    const handleClose = () => setOpen(false)
    const handleFalseClose = () => setOpenFalse(false)

    const handleSuccess = () => navigate('/login')

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const onChangePwc = (e) => {
        setPasswordC(e.target.value)
    }

    const onCLickRegisterBtn = async () => {
        if (!user.name || user.name === '') {
            setMessgaeFalse('이름을 입력해주세요.')
            handleFalseOpen()

            return
        }
        if (!user.id || user.id === '') {
            setMessgaeFalse('id를 입력해주세요.')
            handleFalseOpen()

            return
        }
        if (!user.password || user.password === '') {
            setMessgaeFalse('password를 입력해주세요.')
            handleFalseOpen()

            return
        }
        if (!passwordC || passwordC === '') {
            setMessgaeFalse('password check를 입력해주세요.')
            handleFalseOpen()

            return
        }

        if (user.password !== passwordC) {
            setMessgaeFalse('password와 password check가 같지 않습니다.')
            handleFalseOpen()

            return
        }
        try {
            const { data } = await registerApi(user)
            if (data.status !== 200) {
                setMessgaeFalse(data.message)
                handleFalseOpen()

                return
            }
            handleOpen()
        } catch (err) {
            console.log(err)
            setMessgaeFalse('에러가 발생하였습니다.')
            handleFalseOpen()
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                disableEscapeKeyDown
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose()
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
                <DialogActions className="dialog-actions-dense">
                    <Button onClick={handleSuccess}>확인</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openFalse}
                disableEscapeKeyDown
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleFalseClose()
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title">{messageFalse}</DialogTitle>
                <DialogActions className="dialog-actions-dense">
                    <Button onClick={handleFalseClose}>확인</Button>
                </DialogActions>
            </Dialog>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="name"
                            name="name"
                            onChange={onChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="id"
                            name="id"
                            onChange={onChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="password"
                            type="password"
                            onChange={onChange}
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="password check"
                            type="password"
                            onChange={onChangePwc}
                            autoFocus
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onCLickRegisterBtn}
                        >
                            회원가입
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default RegisterPage
