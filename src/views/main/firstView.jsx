// ** Styled-components Imports
import styled from 'styled-components'

const S = {
    title: styled.h1``,
}

function FirstView() {
    return <S.title>저는 ‘술 그만 먹고 다른 것좀 해볼까?’ 라고 생각하는 사람입니다.</S.title>
}

export default FirstView
