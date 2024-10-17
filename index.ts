// number
let _age: number = 20;

// string
let _address: string = "Việt nam";

// boolean
let _verify: boolean = true;

// array
let address: string[] = ["vinh long", "dong thap", "can tho"];
// console.log(">>> address", address);

// object
let user4: {
  name: string;
  age: number;
  address: string;
  course: string[];
} = {
  name: "phohoccode",
  age: 19,
  address: "vietnam",
  course: ["javascript, typescript, nodejs, reactjs, expressjs"],
};

// console.log(">>> user4", user4);

// tuple: dataType/size/order
let tech: [string, number] = ["javascript", 2];

// optional tuple
let tech2: [number, string?] = [2, "typescript"];

// enum
enum API_STATUS {
  PENDDING = "PENDDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

let a1 = API_STATUS.PENDDING;
// console.log(">>> a1", a1);
// console.log(">>> API_STATUS:", API_STATUS.FULFILLED);

// any
let check: any = "phohoccode";
check = true;
check = 2;
// console.log(">>> check", check);

// void
const handleLogs = (message: string): void => {
  console.log(">>> message: ", message);
};

// never
function handleException(errMgs: string): never {
  throw Error(errMgs);
}
// handleException("Error");

// union
function addNumberOrString(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Tham số phải là số hoặc chuỗi");
}

// console.log(">>> check", addNumberOrString(2, 3));

// aliases
type phoType = number | string;

function addNumberOrString2(a: phoType, b: phoType) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Tham số phải là số hoặc chuỗi");
}

// console.log(">>> check", addNumberOrString2(2, 3));

// if else
const age: number = 19;
if (age > 18) {
  //   console.log("Bạn đã đủ tuổi");
} else {
  //   console.log("Bạn chưa đủ tuổi");
}

// switch case
let month: number = 3;
switch (month) {
  case 1:
    console.log("Tháng 1");
    break;
  case 2:
    console.log("Tháng 2");
    break;
  case 3:
    console.log("Tháng 3");
    break;
  case 4:
    console.log("Tháng 4");
    break;
  case 5:
    console.log("Tháng 5");
    break;
  case 6:
    console.log("Tháng 6");
    break;
  case 7:
    console.log("Tháng 7");
    break;
  case 8:
    console.log("Tháng 8");
    break;
  case 9:
    console.log("Tháng 9");
    break;
  case 10:
    console.log("Tháng 10");
    break;
  case 11:
    console.log("Tháng 11");
    break;
  case 12:
    console.log("Tháng 12");
    break;
  default:
    break;
}

// for loop
for (let i = 0; i < 10; i++) {
  console.log(">>> i=", i);
}

// while loop
let count1: number = 100;
while (count1 >= 100) {
  console.log(">>> count1", count1);
  count1--;
}

// do while
let n1: number = 0;
do {
  console.log(">>> n1", n1);
  n1--;
} while (n1 === 0);

// break

for (let i = 0; i < 100; i++) {
  if (i > 10) {
    console.log(">>> i > 10");
    break;
  }
}

// continue
for (let i = 0; i < 100; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

// function type
function log(message: string) {
  console.log(message);
}
log("hi ae!");

const log2 = (message: string) => {
  console.log(message);
};
log2("phohoccode");

// Optional Parameters
let sum4 = (x: number, y: number, z?: number) => {
  return x + y + (z ?? 0);
  //   return z ? x + y + z : x + y;
};

console.log(">>> sum4", sum4(1, 2));

// default parammeters
let sum5 = (a: number, b: number, z: number = 0) => {
  return a + b + z;
};
console.log(">>> sum5", sum5(1, 2));

//  Rest Parameters
let sum6 = (...numbers: number[]) => {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
};
console.log(">>> sum6", sum6(1, 2, 3, 4, 5, 6, 7, 8, 9));

let multiply = (n: number, ...m: number[]) => {
  return m.map((x) => x * n);
};

let rs = multiply(10, 1, 2, 3, 4, 5);
console.log(">>> rs", rs);

// Function Overloading
function sum8(a: number, b: number): number;
function sum8(a: string, b: string): string;
function sum8(a: any, b: any) {
  return a + b;
}
console.log(">>> sum8", sum8(5, 2), sum8("pho", "hoccode"));

// classes
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getUser(): string {
    return `Xin chào! ${this.name}-${this.age}-${this.address}`;
  }
}

const person = new Person("nhanquoc viet", 19, "hoà tân");
console.log(">>> person", person.getUser());

// Access Modifiers
class Person2 {
  public name: string;
  protected age: number;
  private address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getUser(): string {
    return `Xin chào! ${this.name}-${this.age}-${this.address}`;
  }
}

const person2 = new Person2("nhanquoc viet", 19, "hoà tân");
console.log(">>> person", person.getUser());
// person2.address = 'nhanquocviet' // lỗi do address private
// person2.age = 19 // lỗi do age protected

// readonly
class Person3 {
  readonly birtDate: Date;

  constructor(birtDate: Date) {
    this.birtDate = birtDate;
  }
}

let person3 = new Person3(new Date(2005, 15, 9));
// person3.birtDate = new Date(2004, 2, 5) // lỗi do birtDate readonly

// Getters and Setters
class Person4 {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(age: number) {
    if (age < 0 || age > 150) {
      console.log(">>> Tuổi không hợp lệ!");
      return;
    }
    this.age = age;
  }
}

const person4 = new Person4("phohoccode", 20, "vinh long");
console.log(">>> age", person4.getAge); // getter
person4.setAge = 169;
console.log(">>> age", person4.getAge); // getter

// Inheritance
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  describe(): string {
    return `Đây là con ${this.name}. ${this.age} tuổi.`;
  }
}

class Cat extends Animal {
  foot: number;

  constructor(name: string, age: number, foot: number) {
    super(name, age);
    this.foot = foot;
  }

  describe(): string {
    return `Đây là con mèo ${this.name}. ${this.age} tuổi.`;
  }
}
const cat = new Cat("Meo meo", 2, 4);
console.log(cat.getName());
console.log(cat.describe());

//  Static Methods and Properties
class Circle {
  static pi: number = 3.14;

  static printPI() {
    return this.pi;
  }
}

console.log(">>> pi", Circle.pi);

// Abstract Classes
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

// Interfaces
interface IPerson5 {
  name: string;
  age: number;
  address: string;
}

function _person(person: IPerson5) {
    person.name = 'phohoccode',
    person.age = 20,
    person.address = 'Vĩnh Long'
}

