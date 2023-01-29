// ** React Imports
import React, { useState } from 'react'

// ** Scroll library
import { SectionsContainer, Section } from 'react-fullpage'

// ** Page Imports
import LoginPage from '../login'
import RegisterPage from '../register'

function HomePage() {
    const [loginPage, setLoginPage] = useState(true)

    let options = {
        anchors: ['sectionOne', 'sectionTwo'],
    }

    return (
        <SectionsContainer {...options}>
            <Section></Section>
            <Section>
                {loginPage ? <LoginPage setLoginPage={setLoginPage} /> : <RegisterPage />}
            </Section>
        </SectionsContainer>
    )
}

export default HomePage
