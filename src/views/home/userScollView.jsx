// // ** Other Views Imports
import LoginPage from '../../page/login'
import RegisterPage from '../../page/register'

import Carousel from 'react-material-ui-carousel'

function UserScrollView() {
    return (
        <Carousel>
            <LoginPage />
            <RegisterPage />
        </Carousel>
    )
}

export default UserScrollView
