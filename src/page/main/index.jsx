// ** React Imports
import React, { useState, useEffect } from 'react'

// ** Style
import S from './style'

import { FullPage, Slide } from 'react-full-page'

// ** Other Views Imports
import TodoList from '../../views/main/todoList'
import AddForm from '../../views/main/addForm'
import FirstView from '../../views/main/firstView'
import SecondView from '../../views/main/secondView'
import ThirdView from '../../views/main/thirdView'
import FourthView from '../../views/main/fourthView'
import FifthView from '../../views/main/fifthView'

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
                <FirstView />
            </Slide>
            <Slide>
                <SecondView />
            </Slide>
            <Slide>
                <ThirdView />
            </Slide>
            <Slide>
                <FourthView />
            </Slide>
            <Slide>
                <FifthView />
            </Slide>
        </FullPage>
    )
}

export default MainPage
