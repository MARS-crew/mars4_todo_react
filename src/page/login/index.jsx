// ** React Imports
import React, { useState } from 'react'

// ** Router Imports
import { Link, useNavigate } from 'react-router-dom'

// ** Api Imports
import { loginApi } from '../../api/auth'

// ** Style
import S from './style'

function LoginPage() {
    const [user, setUser] = useState({ id: '', password: '' })

    const navigate = useNavigate()

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const onCLickLoginBtn = async () => {
        try {
            const { data } = await loginApi(user)
            if (data.status === 200) {
                alert('로그인 성공')
                navigate('/main')
            }
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <S.Outer>
            <S.Input placeholder="Enter ID" onChange={onChange} name="id" />
            <S.Input
                placeholder="Enter Password"
                onChange={onChange}
                type="password"
                name="password"
            />
            <S.LoginBtn onClick={onCLickLoginBtn}>LOGIN</S.LoginBtn>
            <Link to="/register">
                <S.PText>회원가입하기</S.PText>
            </Link>
        </S.Outer>
    )
}

export default LoginPage
