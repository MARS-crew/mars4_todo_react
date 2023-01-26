// ** React Imports
import React, { useState, useEffect } from 'react'

// ** Style
import S from './style'

import { FullPage, Slide } from 'react-full-page'

// ** Other Views Imports
import TodoList from '../../views/main/todoList'
import AddForm from '../../views/main/addForm'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/apps/todo'

function MainPage() {
    const [reRenderSwitch, setReRenderSwitch] = useState(false)

    const dispatch = useDispatch()
    const { loadingStat, responseData } = useSelector((state) => state.todo)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    useEffect(() => {
        if (reRenderSwitch) {
            setReRenderSwitch(false)
        }

        dispatch(fetchData())
    }, [dispatch, reRenderSwitch])

    return (
        <FullPage>
            <Slide>
                <S.Text>Main Page</S.Text>
                <AddForm setReRenderSwitch={setReRenderSwitch} />
                <TodoList responseData={responseData} />
            </Slide>
            <Slide>
                <S.Text>Main Page</S.Text>
            </Slide>
            <Slide>
                <S.Text>Main Page</S.Text>
            </Slide>
            <Slide>
                <S.Text>Main Page</S.Text>
            </Slide>
            <Slide>
                <S.Text>Main Page</S.Text>
            </Slide>
        </FullPage>
    )
}

export default MainPage
