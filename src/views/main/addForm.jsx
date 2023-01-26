// ** React Imports
import { useState } from 'react'

// ** Styled-components Imports
import styled from 'styled-components'

// ** Api Imports
import { saveTodoApi } from '../../api/todo'

const S = {
    ViewBox: styled.div``,
    Input: styled.input``,
    AddBtn: styled.button``,
}

function AddForm(props) {
    const { setReRenderSwitch } = props
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onClickAddBtn = async () => {
        try {
            if (!text || text === '') {
                alert('Enter Todo')
                return
            }
            const { data } = await saveTodoApi(text)
            if (data.status !== 200) {
                alert('FAILD')
            }
            setText('')
            setReRenderSwitch(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <S.ViewBox>
            <S.Input placeholder="Enter Todo" value={text} onChange={onChange} />
            <S.AddBtn onClick={onClickAddBtn}>추가하기</S.AddBtn>
        </S.ViewBox>
    )
}

export default AddForm
