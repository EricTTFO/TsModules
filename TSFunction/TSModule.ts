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

module Validation {
    export interface StringValidator {
        isAcceptable(s:string):boolean;
    }

var LettersRegexp = /^[A-Za-z]+$]/;
var numberRegexp = /^[0-9]+$]/;

    export class LettersOnluValidator implements StringValidator{
        isAcceptable(s:string){
            return LettersRegexp.test(s);
        }
    }
    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}