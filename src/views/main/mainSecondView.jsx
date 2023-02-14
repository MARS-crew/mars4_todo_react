// ** React Imports
import { useEffect, useState } from 'react'

// ** Mui Imports
import { Card, Grid, TextField, Typography } from '@mui/material'

// ** Other Views Imports
import TodoList from './components/todoList'
import SelectModal from '../../components/modal/selectModal'
import BasicModal from '../../components/modal/basicModal'

// ** Scroll library
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

// ** Api Imports
import { saveTodoApi } from '../../api/todo'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/apps/todo'

function MainSecondView() {
    const dispatch = useDispatch()
    const { responseData, loadingStat } = useSelector((state) => state.todo)

    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    const [openFalse, setOpenFalse] = useState(false)
    const [messageFalse, setMessgaeFalse] = useState('')

    const [reRenderSwitch, setReRenderSwitch] = useState(false)

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const handleOpen = (e) => {
        if (e.key == 'Enter') {
            if (!text || text == '') {
                setMessgaeFalse('생성할 버킷을 입력하세요.')
                handleFalseOpen()

                return
            }
            setOpen(true)
        }
    }
    const handleFalseOpen = () => setOpenFalse(true)
    const handleClose = () => setOpen(false)
    const handleFalseClose = () => setOpenFalse(false)

    const handleAddBucket = async () => {
        const { data } = await saveTodoApi(text)
        console.log(data)
    }

    useEffect(() => {
        if (reRenderSwitch) {
            setReRenderSwitch(false)
        }

        dispatch(fetchData())
    }, [reRenderSwitch])

    if (loadingStat) return null

    return (
        <Grid container sx={{ px: 20, py: 5 }}>
            <SelectModal
                state={open}
                closeEvent={handleClose}
                message="버킷을 생성하시겠습니까?"
                event={handleAddBucket}
            />
            <BasicModal state={openFalse} closeEvent={handleFalseClose} message={messageFalse} />
            <Card sx={{ p: 4, borderRadius: 10 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4">버킷리스트 작성</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onKeyDown={handleOpen} onChange={onChangeText} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">내 버킷리스트</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ScrollMenu>
                            <Grid item xs={4} sx={{ p: 2 }}>
                                <TodoList />
                            </Grid>
                            <Grid item xs={4} sx={{ p: 2 }}>
                                <TodoList />
                            </Grid>
                            <Grid item xs={4} sx={{ p: 2 }}>
                                <TodoList />
                            </Grid>
                        </ScrollMenu>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MainSecondView
