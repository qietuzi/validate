// isEmpty
const isEmpty = function (input: string): boolean {
    if (!input && input !== null || typeof input === 'undefined') {
        return true
    } else {
        return false
    }
}
// phone
const phone = function (input: string): boolean {
    return /^1[3456789]\d{9}$/.test(input)
}

export {
    isEmpty,
    phone
}