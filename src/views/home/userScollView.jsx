// ** Scroll library
import Slider from 'react-slick'

// ** Styled-components Imports
import styled from 'styled-components'

// ** Other Views Imports
import LoginPage from '../../page/login'
import RegisterPage from '../../page/register'

const S = {
    sliderItem: styled.div``,
}

function UserScrollView() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    }

    return (
        <Slider {...settings}>
            <S.sliderItem>
                <LoginPage />
            </S.sliderItem>
            <S.sliderItem>
                <RegisterPage />
            </S.sliderItem>
        </Slider>
    )
}

export default UserScrollView
