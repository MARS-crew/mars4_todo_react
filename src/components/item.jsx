// ** Styled-components Imports
import styled from 'styled-components'

const S = {
    Itme: styled.li``,
}

function Item(props) {
    const { item } = props
    return <S.Itme>{`${item.todoIdx} : ${item.text} ${item.createdDate}`}</S.Itme>
}

export default Item
