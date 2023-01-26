import { getCookie } from './cookies'

/**
 * 배열의 빈 값이 있는 지 확인하는 함수
 * @param {[]} arr
 * @returns
 */
export const useNull = (arr) => {
    for (const item of arr) {
        if (!item) return false
    }
    return true
}

export const useSame = () => {
    if (a !== b) return false
    return true
}

export const useLogined = async () => {
    const cookie = await getJwtCookie()
    return cookie ? true : false
}

export const getJwtCookie = async () => {
    return await getCookie('accesstoken')
}

export const getParams = async () => {
    const params = new URL(window.location.href).searchParams
    return params.get('token')
}
