import { Cookies } from 'react-cookie'

const cookies = new Cookies()

/**
 * Cookie의 이름을 이용한 Cookie 조회하는 함수
 * @param {string} name
 * @returns cookies
 */
export const getCookie = async (name) => {
    return await cookies.get(name)
}

/**
 * Cookie를 저장하는 함수
 * @param {string} name
 * @param {*} value
 * @param {*} option
 * @returns
 */
export const setCookie = async (name, value, option) => {
    const date = new Date()
    date.setSeconds(date.getSeconds() + 10800)
    return cookies.set(name, value, { expires: date })
}

/**
 * Cookie를 이름으로 삭제하는 함수
 * @param {string} name
 * @returns
 */
export const removeCookie = async (name) => {
    return cookies.remove(name)
}
