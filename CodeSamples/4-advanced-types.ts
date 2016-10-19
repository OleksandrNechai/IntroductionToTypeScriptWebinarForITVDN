//********************** Union types
// interface A
// {
//     name: string;
//     age: number;
// }
// interface B
// {
//     name: string;
//     grade: string;
// }
// function f(x: A | B){
//     return x.name; // OK
//     // return x.age; // ERROR
//     // return x.grade; // ERROR
// }

//*********************** Intersection Types
// interface A
// {
//     name: string;
//     age: number;
// }
// interface B
// {
//     name: string;
//     grade: string;
// }

// let x: A & B = { name: 'Sahsa', age: 20, grade: 'A' }; // OK
// //let y: A & B = { name: 'Sahsa', age: 20, grade: 'A', height: 195 }; // ERROR
// //let z: A & B = { name: 'Sahsa', age: 20 };

//********************** Type Aliases
// interface A
// {
//     name: string;
//     age: number;
// }
// interface B
// {
//     name: string;
//     grade: string;
// }
// type Student = A & B
// let x: Student = { name: 'Sahsa', age: 20, grade: 'A' };