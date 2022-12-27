/* eslint-disable */
// ** React Imports
import React, { useEffect } from 'react'

// ** Router Imports
import { Route, Routes, useNavigate } from 'react-router-dom'

// ** Page Imports
import LoginPage from './page/login'
import Todo from './page/todo'

const getHomeRoute = () => {
    return '/login'
}

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        const homeRoute = getHomeRoute()

        // navigate(homeRoute)
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </>
    )
}

export default App
