// ** React Imports
import React from 'react'

// ** Router Imports
import { Link } from 'react-router-dom'

// ** Style
import S from './style'

function HomePage() {
    return (
        <S.Outer>
            <S.Text>렌더 페이지 입니다.</S.Text>
            <Link to="/login">
                <S.LoginBtn>로그인</S.LoginBtn>
            </Link>
        </S.Outer>
    )
}

export default HomePage
