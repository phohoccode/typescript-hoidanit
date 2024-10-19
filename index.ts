// number
let _age: number = 20;

// string
let _address: string = "Việt nam";

// boolean
let _verify: boolean = true;

// array
let address: string[] = ["vinh long", "dong thap", "can tho"];

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

// Tuple -> mảng cố định với số lượng phần tử
// -> mỗi phần tử có kiểu dữ liệu xác định
let tech: [string, number] = ["javascript", 2];

// Optional tuple -> cho phép một số phần tử trong tuple có thể không bắt buộc
let tech2: [number, string?] = [2, "typescript"];

// enum -> tập hợp các giá trị cố định
enum API_STATUS {
  PENDDING = "PENDDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

let a1 = API_STATUS.PENDDING;

// any -> không bị kiểm tra kiểu bởi typescript
let check: any = "phohoccode";
check = true;
check = 2;

// void -> một hàm không trả về giá trị
const handleLogs = (message: string): void => {
  console.log(">>> message: ", message);
};

// never -> một hàm hoặc biểu thức sẽ không bao giờ hoàn thành thành công.
function throwError(message: string): never {
  throw new Error(message);
}

// union -> cho phép một biến hoặc một tham số có thể mang nhiều kiểu dữ liệu khác nhau
function addNumberOrString(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Tham số phải là số hoặc chuỗi");
}

// aliases -> cho phép đặt tên cho một kiểu dữ liệu
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


// function type
function log(message: string) {
  console.log(message);
}
log("hi ae!");

const log2 = (message: string) => {
  console.log(message);
};
log2("phohoccode");

// Optional Parameters ->  cho phép khai báo một tham số có thể có hoặc không được truyền vào hàm
let sum4 = (x: number, y: number, z?: number): number => {
  return x + y + (z ?? 0);
  //   return z ? x + y + z : x + y;
};

// Default parammeters -> cho phép chỉ định giá trị mặc định cho một tham số trong hàm
let sum5 = (a: number, b: number, z: number = 0): number => {
  return a + b + z;
};

//  Rest Parameters ->  cho phép truyền một số lượng không xác định các đối số
// cho một hàm và gom chúng lại thành một mảng
let sum6 = (...numbers: number[]): number => {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
};

let multiply = (n: number, ...m: number[]) => {
  return m.map((x) => x * n);
};

// Interfaces -> xác định cấu trúc của đối tượng về kiểu của thuộc tính
interface IPerson5 {
  name: string;
  age: number;
  address: string;
}

function _person(person: IPerson5) {
  (person.name = "phohoccode"),
    (person.age = 20),
    (person.address = "Vĩnh Long");
}


// Function Overloading
function sum8(a: number, b: number): number;
function sum8(a: string, b: string): string;
function sum8(a: any, b: any) {
  return a + b;
}

// class
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
person4.setAge = 169;

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

//  Static Methods and Properties
class Circle {
  static pi: number = 3.14;

  static printPI() {
    return this.pi;
  }
}

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


