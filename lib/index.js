"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// isEmpty
var isEmpty = function (input) {
    return !!input;
};
exports.isEmpty = isEmpty;
// isCellPhone
var isCellPhone = function (input) {
    return /^1[3456789]\d{9}$/.test(input);
};
exports.isCellPhone = isCellPhone;
// isTelPhone
var isTelPhone = function (input) {
    return /([0-9]{3,4}-)?[0-9]{7,8}/.test(input);
};
exports.isTelPhone = isTelPhone;
// isEmail
var isEmail = function (input) {
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(input);
};
exports.isEmail = isEmail;
// isZipCode
var isZipCode = function (input) {
    return /^[1-9][0-9]{5}$/.test(input);
};
exports.isZipCode = isZipCode;
// isIdNum
var isIdNum = function (input) {
    return /^\d{15}|\d{18}$/.test(input);
};
exports.isIdNum = isIdNum;
exports.default = {
    isEmpty: isEmpty,
    isCellPhone: isCellPhone,
    isTelPhone: isTelPhone,
    isEmail: isEmail,
    isZipCode: isZipCode,
    isIdNum: isIdNum
};
//# sourceMappingURL=index.js.map