// ** React Imports
import React, { useState } from 'react'

// ** Scroll library
import { SectionsContainer, Section } from 'react-fullpage'

// ** Page Imports
import LoginPage from '../login'
import RegisterPage from '../register'
import ScrollView from '../../views/home/scollView'
import UserScrollView from '../../views/home/userScollView'

const a= 1
function HomePage() {
    const [loginPage, setLoginPage] = useState(true)

    let options = {
        anchors: [1, 2],
    }

    return (
        <SectionsContainer {...options}>
            <Section>
                <ScrollView />
            </Section>
            <Section>
                {/* {loginPage ? <LoginPage setLoginPage={setLoginPage} /> : <RegisterPage />} */}
                <UserScrollView />
            </Section>
        </SectionsContainer>
    )
}

export default HomePage
