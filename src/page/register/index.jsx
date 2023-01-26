// ** React Imports
import React, { useState } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Api Imports
import { registerApi } from '../../api/auth'
import { useNull } from '../../utils/hooks'

// ** Style
import S from './style'

function RegisterPage() {
    const [user, setUser] = useState({ id: '', password: '', name: '' })
    const [passwordC, setPasswordC] = useState('')

    const navigate = useNavigate()

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const onChangePwc = (e) => {
        setPasswordC(e.target.value)
    }

    const onCLickRegisterBtn = async () => {
        try {
            if (!useNull([user.id, user.name, user.password, passwordC])) {
                alert('Enter Info')
                return
            }
            if (user.password !== passwordC) {
                alert('Password Not')
                return
            }
            const { data } = await registerApi(user)
            if (data.status === 200) {
                alert('Success Register')
                navigate('/login')
                return
            }
            alert('FAILD')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <S.Input placeholder="Enter ID" onChange={onChange} name="id" />
            <S.Input placeholder="Enter Password" onChange={onChange} name="name" />
            <S.Input
                placeholder="Enter Password"
                onChange={onChange}
                type="password"
                name="password"
            />
            <S.Input
                placeholder="Enter Password Check"
                onChange={onChangePwc}
                type="password"
                name="passwordC"
            />
            <S.LoginBtn onClick={onCLickRegisterBtn}>Register</S.LoginBtn>
        </>
    )
}

export default RegisterPage
