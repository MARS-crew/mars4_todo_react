// ** React Imports
import React from 'react'

// ** Scroll library
import { SectionsContainer, Section } from 'react-fullpage'

// ** Other Views Imports
import ScrollView from '../../views/home/scollView'
import UserScrollView from '../../views/home/userScollView'

function HomePage() {
    const options = {
        anchors: [1, 2],
    }

    return (
        <SectionsContainer {...options}>
            <Section>
                <ScrollView />
            </Section>
            <Section>
                <UserScrollView />
            </Section>
        </SectionsContainer>
    )
}

export default HomePage
