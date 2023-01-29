import Slider from 'react-slick'
import one from '/one.png'
import two from '/two.png'
import three from '/three.png'
import four from '/four.png'
import styled from 'styled-components'
import LoginPage from '../../page/login'
import RegisterPage from '../../page/register'

const S = {
    img: styled.img`
        height: 300px;
    `,
}

function UserScrollView() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
    }
    return (
        <Slider {...settings}>
            <div>
                <LoginPage />
            </div>
            <div>
                <RegisterPage />
            </div>
        </Slider>
    )
}

export default UserScrollView
