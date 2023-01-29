// ** Scroll library
import Slider from 'react-slick'

// ** Styled-components Imports
import styled from 'styled-components'

// ** Statics Imports
import one from '/one.png'
import two from '/two.png'
import three from '/three.png'
import four from '/four.png'

const S = {
    img: styled.img`
        height: 300px;
    `,
    sliderItem: styled.div``,
}

function ScrollView() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
    }
    return (
        <Slider {...settings}>
            <S.sliderItem>
                <S.img src={one} />
            </S.sliderItem>
            <S.sliderItem>
                <S.img src={two} />
            </S.sliderItem>
            <S.sliderItem>
                <S.img src={three} />
            </S.sliderItem>
            <S.sliderItem>
                <S.img src={four} />
            </S.sliderItem>
        </Slider>
    )
}

export default ScrollView
