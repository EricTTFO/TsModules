"use strict";
// interface StringValidator {
//     isAcceptable(s:string): boolean;
// }
// var LettersRegexp = /^[A-Za-z]+$]/;
// var numberRegexp = /^[0-9]+$]/;
// class LettersOnluValidator implements StringValidator{
//     isAcceptable(s:string): boolean{
//         return undefined;
//     }
// }
// class ZipCodeValidator implements StringValidator {
//         isAcceptable(s:string):boolean{
//             return s.length === 5 && numberRegexp.test(s);
//         }
// }
var Validation;
(function (Validation) {
    var LettersRegexp = /^[A-Za-z]+$]/;
    var numberRegexp = /^[0-9]+$]/;
    var LettersOnluValidator = /** @class */ (function () {
        function LettersOnluValidator() {
        }
        LettersOnluValidator.prototype.isAcceptable = function (s) {
            return LettersRegexp.test(s);
        };
        return LettersOnluValidator;
    }());
    Validation.LettersOnluValidator = LettersOnluValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
