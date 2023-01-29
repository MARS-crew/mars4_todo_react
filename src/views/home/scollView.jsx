import Slider from 'react-slick'
import one from '/one.png'
import two from '/two.png'
import three from '/three.png'
import four from '/four.png'
import styled from 'styled-components'

const S = {
    img: styled.img`
        height: 300px;
    `,
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
            <div>
                <S.img src={one} />
            </div>
            <div>
                <S.img src={two} />
            </div>
            <div>
                <S.img src={three} />
            </div>
            <div>
                <S.img src={four} />
            </div>
        </Slider>
    )
}

export default ScrollView
