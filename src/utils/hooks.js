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
