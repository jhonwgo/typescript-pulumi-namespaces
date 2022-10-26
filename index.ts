
/// <reference path="./src/Validation.ts" />
/// <reference path="./src/LettersValidator.ts" />
/// <reference path="./src/ZipCodeValidator.ts" />
//Some samples to try
let strings = ["You", "53454", "Hello"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

//Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isValid(s) ? "Valid" : "Invalid" } ${ name }`);
    }
}


