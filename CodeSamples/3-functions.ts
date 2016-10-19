//************Function types
// function add(x: number, y: number): number
// {
//     return x + y;
// }

// let myAdd = function (x: number, y: number): number
// {
//     return x + y;
// };

// let myAddExplicitlyTyped: (baseValue: number, increment: number) => number =
//     function (x: number, y: number): number
//     {
//         return x + y;
//     };

//*************Optional and Default Parameters
// function buildName(firstName: string, lastName?: string)
// {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }

// let result1 = buildName("Sasha");                    // works correctly
// let result2 = buildName("Sasha", "Nechai", "Ph.D");  // error, too many parameters
// let result3 = buildName("Sasha", "Nechai");          // ah, just right

// function buildName(firstName: string, lastName = "Smith")
// {
//     return firstName + " " + lastName;
// }
// let result1 = buildName("Sasha");                    // works correctly
// let result2 = buildName("Sasha", "Nechai", "Ph.D");  // error, too many parameters
// let result3 = buildName("Sasha", "Nechai");          // ah, just right

//**************Overloads
// function f(x: number): number;
// function f(x: string): string;
// function f(x: number | string): number | string
// {
//     return x;
// }

// let x = f(5);

//**************Generic functions

// function identity<T>(arg: T): T
// {
//     return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;

// let x = identity(true);