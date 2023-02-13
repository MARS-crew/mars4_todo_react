// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other Views Imports
import TodoItem from './todoItem'

function TodoList(props) {
    const { item } = props

    return (
        <Grid container spacing={3} sx={{ minWidth: 463 }}>
            <Grid item xs={12}>
                <TodoItem />
            </Grid>
            <Grid item xs={12}>
                <TodoItem />
            </Grid>
            <Grid item xs={12}>
                <TodoItem />
            </Grid>
            <Grid item xs={12}>
                <TodoItem />
            </Grid>
            <Grid item xs={12}>
                <TodoItem />
            </Grid>
            <Grid item xs={12}>
                <TodoItem />
            </Grid>
        </Grid>
    )
}

export default TodoList
