// isQQ
const isQQ = function (input: string): boolean {
    return /\d{5,11}/.test(input)
}

// isEmpty
const isEmpty = function (input: string): boolean {
    return !!!input
}

// isIdNum
const isIdNum = function (input: string): boolean {
    const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
    return reg.test(input)
}

// isEmail
const isEmail = function (input: string): boolean {
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(input)
}

// isZipCode
const isZipCode = function (input: string): boolean {
    return /^[1-9][0-9]{5}$/.test(input)
}

// isTelPhone
const isTelPhone = function (input: string): boolean {
    return /([0-9]{3,4}-)?[0-9]{7,8}/.test(input)
}

// isCellPhone
const isCellPhone = function (input: string): boolean {
    return /^1[3456789]\d{9}$/.test(input)
}





export {
    isQQ,
    isEmpty,
    isEmail,
    isIdNum,
    isZipCode,
    isTelPhone,
    isCellPhone,
}

export default {
    isQQ,
    isEmpty,
    isEmail,
    isIdNum,
    isZipCode,
    isTelPhone,
    isCellPhone,
}