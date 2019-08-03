// isEmpty
var isEmpty = function (input) {
    return !!!input;
};
// isCellPhone
var isCellPhone = function (input) {
    return /^1[3456789]\d{9}$/.test(input);
};
// isTelPhone
var isTelPhone = function (input) {
    return /([0-9]{3,4}-)?[0-9]{7,8}/.test(input);
};
// isEmail
var isEmail = function (input) {
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(input);
};
// isZipCode
var isZipCode = function (input) {
    return /^[1-9][0-9]{5}$/.test(input);
};
// isIdNum
var isIdNum = function (input) {
    return /^\d{15}|\d{18}$/.test(input);
};
export { isEmpty, isCellPhone, isTelPhone, isEmail, isZipCode, isIdNum };
