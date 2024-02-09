let sport = 'football';
let id  = 5;

// let name = 'MICHEL';
// name.toLowerCase();
// name = 'munezero';
// name.toUpperCase();
// console.log(name);

let array = [1,2,3,4,5];
array.push(6)
console.log(array);

let age: string | number;
age = 26;
age = '26';

let secondName = new String('NTAGANIRA')
console.log(secondName);

let firstname = new String('Michael');



// let age: string | number;
// age = 10;
// // age = "Michael"
// console.log(age)

// let firstName = new String('Michael');
// console.log(firstName)

// let x =5;
// let y = 7;
// x = y;
// y = 100;

// console.log(x)
// console.log(y)

// let obj = { x:10, y: 20}
// let obj2 = obj;


// console.log(obj2.y = 100)

// let num: number[] = [1,2,3,4,5];
// let str: string[] = ['MUNEZERO','NTAGANIRA','Michel'];
// let bobo: boolean[] = [true,false];
// let all: any[] = [1,'MUNEZERO',true];
// all.push(3)
// console.log(all);

// let person: (string | number | boolean)[] = ['Michael', 100, true];
// person[0] = 'MUNEZERO';
// console.log(person)

// let person: [string, number, boolean] = ['NTAGANIRA', 100, true]
// person[0] = 'Michael'; // true
// console.log(person);


// interface person {
//     name: string;
//     age: number;
//     married: boolean;
// }
// let mySelf: person = {
//     name: 'Michael',
//     age: 25,
//     married: true
// }

// let yourSelf: person = {
//     name: 'Vargas',
//     age: 30,
//     married: false,
// }

// console.log(mySelf)

                                      // **to use interface on functions**

// interface speech{
//     sayHi(name:string):string;
//     sayBye: (name:string) => string;
// }

// let sayStuff: speech = {
//     sayHi: function(name: string){
//         return `Hi my ${name}`;
//     },
//     sayBye: function(name: string){
//         return `Bye my ${name}`
//     }
// }

// console.log(sayStuff.sayHi('friend'))
// console.log(sayStuff.sayBye('friend'))

                                     // **End of using interface on functions**

// const circle = (diam: number) => {
//  return 'the circumference will be: ' + Math.PI * diam;
// }
// console.log(circle(10))

const addNums = (num1:number,num2:number):string => {
    const result = num1 + num2;
    return `The summation will be ${result}`
}
console.log(addNums(5,5))