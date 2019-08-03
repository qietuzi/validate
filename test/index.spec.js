(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("../index");
    describe('This is isEmpty', function () {
        var empty = '';
        var notEmpty = 'i am not empty';
        it('This is empty', function () {
            expect(index_1.isEmpty(empty)).toBe(true);
        });
        it('This is not empty', function () {
            expect(index_1.isEmpty(notEmpty)).toBe(false);
        });
    });
    describe('This is phone', function () {
        var rightPhone = '18108127001';
        var errorPhone = 'not a phone';
        it('This is right phone', function () {
            expect(index_1.isCellPhone(rightPhone)).toBe(true);
        });
        it('This is error phone', function () {
            expect(index_1.isCellPhone(errorPhone)).toBe(false);
        });
    });
});
//# sourceMappingURL=index.spec.js.map