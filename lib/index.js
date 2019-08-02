"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// isEmpty
var isEmpty = function (input) {
    if (!input && input !== null || typeof input === 'undefined') {
        return true;
    }
    else {
        return false;
    }
};
exports.isEmpty = isEmpty;
// phone
var phone = function (input) {
    return /^1[3456789]\d{9}$/.test(input);
};
exports.phone = phone;
//# sourceMappingURL=index.js.map