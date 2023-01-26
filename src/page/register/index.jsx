// ** React Imports
import React from 'react'
import { useState } from 'react'
import { login } from '../../api/auth'

// ** Style
import S from './style'

function RegisterPage() {
    const [user, setUser] = useState({ id: '', password: '' })

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const onCLickLoginBtn = async () => {
        try {
            const res = await login(user)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <S.Input placeholder="Enter ID" onChange={onChange} name="id" />
            <S.Input
                placeholder="Enter Password"
                onChange={onChange}
                type="password"
                name="password"
            />
            <S.LoginBtn onClick={onCLickLoginBtn}>LOGIN</S.LoginBtn>
        </>
    )
}

export default RegisterPage
