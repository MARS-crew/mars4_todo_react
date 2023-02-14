/* eslint-disable */
// ** React Imports
import React, { useEffect } from 'react'

// ** Router Imports
import { Route, Routes, useNavigate } from 'react-router-dom'

// ** Page Imports
import LoginPage from './page/login'
import MainPage from './page/main'
import RegisterPage from './page/register'
import HomePage from './page/home'
import GlobalStyle from './style/GlobalStyle'

// const getHomeRoute = () => {
//     return '/'
// }

const getLoginRoute = () => {
    return '/login'
}

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            const loginRoute = getLoginRoute()
            navigate(loginRoute)

            return
        }

        // const homeRoute = getHomeRoute()
        // navigate(homeRoute)
    }, [])

    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </>
    )
}

export default App
