//************CHECK THAT INPUT HAS LABEL

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

//************EXTRACT INTERFACE

// interface LabelledValue {
//     label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

//************OPTIONAL PROPERTIES
// interface SquareConfig
// {
//     color?: string;
//     width?: number;
// }

// let s: SquareConfig = {} // OK
// s = { color: 'green' } // OK
// s = { width: 5 } // OK
// s = { color: 'green', width: 5 } // OK
// s = { color: 'green', widht: 5 } // ERROR
// s = { color: 'green', width: 5, height: 10 } // ERROR (Excess Property Checks)

//************READONLY PROPERTIES
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // ERROR!

//************FUNCTION TYPES
// interface MathFunc
// {
//     (first: number, second: number): number;
// }
// let f1: MathFunc = (x, y) => x + y; //OK 
// let f2: MathFunc = (x, y) => x > y; //ERROR 

//************Indexable Types
// interface StringArray
// {
//     [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

//************Class Types
// interface IStudent
// {
//     name: string;
//     age: number;
// }
// class Student implements IStudent
// {
//     constructor(public name: string, public age: number) { }
// }
// let s: IStudent = new Student("Anna", 18);
// console.log(`Student: ${s.name}, ${s.age}`); 

//************Extending interfaces
// interface INamedStudent
// {
//     name: string
// }
// interface IStudent extends INamedStudent
// {
//     age: number;
// }
// class Student implements IStudent
// {
//     constructor(public name: string, public age: number) { }
// }
// let s: IStudent = new Student("Anna", 18);
// console.log(`Student: ${s.name}, ${s.age}`); 

//************ Hybrid Types
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;