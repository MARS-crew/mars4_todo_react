// ** React Imports
import React, { useState, useEffect } from 'react'

// ** Style
import S from './style'

// ** Scroll library
import { SectionsContainer, Section } from 'react-fullpage'

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
    const a=1

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    useEffect(() => {
        if (reRenderSwitch) {
            setReRenderSwitch(false)
        }

        dispatch(fetchData())
    }, [dispatch, reRenderSwitch])

    let options = {
        anchors: [1, 2, 3, 4, 5],
    }

    return (
        <SectionsContainer {...options}>
            <Section>
                <S.Text>Main Page</S.Text>
                <AddForm setReRenderSwitch={setReRenderSwitch} />
                <TodoList responseData={responseData} />
                <FirstView />
            </Section>
            <Section>
                <SecondView />
            </Section>
            <Section>
                <ThirdView />
            </Section>
            <Section>
                <FourthView />
            </Section>
            <Section>
                <FifthView />
            </Section>
        </SectionsContainer>
    )
}

export default MainPage
