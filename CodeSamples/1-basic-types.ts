//*****************booleans
//let isDone: boolean = false;

//*****************string
//let color: string = "blue";

//*****************number
//let age: number = 33;

//*****************Generic array
// let list: Array<number> = [1, 2, 3];
// list.forEach(e => console.log(e));

//*****************Enumeration
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);
type Gender = 'male' | 'female';
let g: Gender = 'female';

//*****************Any
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
// notSure.ifItExists(); // okay, ifItExists might exist at runtime

//*****************void
// function f(): void
// {
//     return console.log('This function returns nothing');
// }

//*****************null and undefined (--strictNullChecks not subtypes of all other types)
// let u: undefined = undefined;
// let n: null = null;

//*****************NEVER. Not type (even any) is assignable to never but never is assignable to all types
// function error(message: string): never
// {
//     throw new Error(message);
// }

// function makeVariableNever()
// {
//     let x: number = 5;
//     if (typeof x === 'string') {
//         let y: never = x; // x is of type 'never' here
//     }
// }

// function checkEveryOption(x: number | string): string
// {
//     if (typeof x === 'number') {
//         return x.toString();
//     }
//     else if (typeof x === 'string') {
//         return x;
//     } else {
//         return assertNever(x);
//     }
// }
// function assertNever(x: never): never
// {
//     throw new Error("Unexpected object: " + x);
// }