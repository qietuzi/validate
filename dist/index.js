(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // isQQ
    var isQQ = function (input) {
        return /\d{5,11}/.test(input);
    };
    exports.isQQ = isQQ;
    // isEmpty
    var isEmpty = function (input) {
        return !!!input;
    };
    exports.isEmpty = isEmpty;
    // isIdNum
    var isIdNum = function (input) {
        return /^\d{15}|\d{18}$/.test(input);
    };
    exports.isIdNum = isIdNum;
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
    // isTelPhone
    var isTelPhone = function (input) {
        return /([0-9]{3,4}-)?[0-9]{7,8}/.test(input);
    };
    exports.isTelPhone = isTelPhone;
    // isCellPhone
    var isCellPhone = function (input) {
        return /^1[3456789]\d{9}$/.test(input);
    };
    exports.isCellPhone = isCellPhone;
    exports.default = {
        isQQ: isQQ,
        isEmpty: isEmpty,
        isEmail: isEmail,
        isIdNum: isIdNum,
        isZipCode: isZipCode,
        isTelPhone: isTelPhone,
        isCellPhone: isCellPhone,
    };
});
//# sourceMappingURL=index.js.map