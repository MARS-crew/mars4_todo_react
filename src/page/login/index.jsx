/* eslint-disable */

// ** React Imports
import React, { useState } from 'react'

// ** Router Imports
import { Link, useNavigate } from 'react-router-dom'

// ** Api Imports
import { loginApi } from '../../api/auth'

// ** Mui Imports
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container,
    createTheme,
    ThemeProvider,
    Dialog,
    DialogTitle,
    DialogActions,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { setLoginned } from '../../store/apps/user'

const theme = createTheme()

function LoginPage() {
    const [user, setUser] = useState({ id: '', password: '' })

    const [open, setOpen] = useState(false)
    const [openFalse, setOpenFalse] = useState(false)

    const [message, setMessgae] = useState('로그인에 성공하였습니다.')
    const [messageFalse, setMessgaeFalse] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOpen = () => setOpen(true)
    const handleFalseOpen = () => setOpenFalse(true)
    const handleClose = () => setOpen(false)
    const handleFalseClose = () => setOpenFalse(false)
    const handleSuccess = () => navigate('/main')

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const onCLickLoginBtn = async () => {
        if (!user.id || user.id === '') {
            setMessgaeFalse('id를 입력해주세요.')
            handleFalseOpen()

            return
        }
        if (!user.password || user.password === '') {
            setMessgaeFalse('password 입력해주세요.')
            handleFalseOpen()

            return
        }

        try {
            const { data } = await loginApi(user)
            if (data.status !== 200) {
                setMessgaeFalse(data.message)
                handleFalseOpen()

                return
            }

            dispatch(setLoginned({ name: data.responseData.name, token: data.responseData.token }))
            localStorage.setItem('token', data.responseData.token)
            handleOpen()
        } catch (err) {
            console.log(err)
            setMessgaeFalse('에러가 발생하였습니다!!')
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
                        로그인
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
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
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onCLickLoginBtn}
                        >
                            로그인
                        </Button>
                        <Grid container>
                            <Grid item xs />
                            <Grid item>
                                <Link to="/register">Don't have an account? Sign Up</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default LoginPage
