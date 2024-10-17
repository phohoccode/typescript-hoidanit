var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// number
var _age = 20;
// string
var _address = "Việt nam";
// boolean
var _verify = true;
// array
var address = ["vinh long", "dong thap", "can tho"];
// console.log(">>> address", address);
// object
var user4 = {
    name: "phohoccode",
    age: 19,
    address: "vietnam",
    course: ["javascript, typescript, nodejs, reactjs, expressjs"],
};
// console.log(">>> user4", user4);
// tuple: dataType/size/order
var tech = ["javascript", 2];
// optional tuple
var tech2 = [2, "typescript"];
// enum
var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDDING"] = "PENDDING";
    API_STATUS["FULFILLED"] = "FULFILLED";
    API_STATUS["REJECTED"] = "REJECTED";
})(API_STATUS || (API_STATUS = {}));
var a1 = API_STATUS.PENDDING;
// console.log(">>> a1", a1);
// console.log(">>> API_STATUS:", API_STATUS.FULFILLED);
// any
var check = "phohoccode";
check = true;
check = 2;
// console.log(">>> check", check);
// void
var handleLogs = function (message) {
    console.log(">>> message: ", message);
};
// never
function handleException(errMgs) {
    throw Error(errMgs);
}
// handleException("Error");
// union
function addNumberOrString(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Tham số phải là số hoặc chuỗi");
}
function addNumberOrString2(a, b) {
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
var age = 19;
if (age > 18) {
    //   console.log("Bạn đã đủ tuổi");
}
else {
    //   console.log("Bạn chưa đủ tuổi");
}
// switch case
var month = 3;
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
for (var i = 0; i < 10; i++) {
    console.log(">>> i=", i);
}
// while loop
var count1 = 100;
while (count1 >= 100) {
    console.log(">>> count1", count1);
    count1--;
}
// do while
var n1 = 0;
do {
    console.log(">>> n1", n1);
    n1--;
} while (n1 === 0);
// break
for (var i = 0; i < 100; i++) {
    if (i > 10) {
        console.log(">>> i > 10");
        break;
    }
}
// continue
for (var i = 0; i < 100; i++) {
    if (i % 2 == 1)
        continue;
    console.log(i);
}
// function type
function log(message) {
    console.log(message);
}
log("hi ae!");
var log2 = function (message) {
    console.log(message);
};
log2("phohoccode");
// Optional Parameters
var sum4 = function (x, y, z) {
    return x + y + (z !== null && z !== void 0 ? z : 0);
    //   return z ? x + y + z : x + y;
};
console.log(">>> sum4", sum4(1, 2));
// default parammeters
var sum5 = function (a, b, z) {
    if (z === void 0) { z = 0; }
    return a + b + z;
};
console.log(">>> sum5", sum5(1, 2));
//  Rest Parameters
var sum6 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    numbers.forEach(function (number) { return (sum += number); });
    return sum;
};
console.log(">>> sum6", sum6(1, 2, 3, 4, 5, 6, 7, 8, 9));
var multiply = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return x * n; });
};
var rs = multiply(10, 1, 2, 3, 4, 5);
console.log(">>> rs", rs);
function sum8(a, b) {
    return a + b;
}
console.log(">>> sum8", sum8(5, 2), sum8("pho", "hoccode"));
// classes
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getUser = function () {
        return "Xin ch\u00E0o! ".concat(this.name, "-").concat(this.age, "-").concat(this.address);
    };
    return Person;
}());
var person = new Person("nhanquoc viet", 19, "hoà tân");
console.log(">>> person", person.getUser());
// Access Modifiers
var Person2 = /** @class */ (function () {
    function Person2(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person2.prototype.getUser = function () {
        return "Xin ch\u00E0o! ".concat(this.name, "-").concat(this.age, "-").concat(this.address);
    };
    return Person2;
}());
var person2 = new Person2("nhanquoc viet", 19, "hoà tân");
console.log(">>> person", person.getUser());
// person2.address = 'nhanquocviet' // lỗi do address private
// person2.age = 19 // lỗi do age protected
// readonly
var Person3 = /** @class */ (function () {
    function Person3(birtDate) {
        this.birtDate = birtDate;
    }
    return Person3;
}());
var person3 = new Person3(new Date(2005, 15, 9));
// person3.birtDate = new Date(2004, 2, 5) // lỗi do birtDate readonly
// Getters and Setters
var Person4 = /** @class */ (function () {
    function Person4(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Object.defineProperty(Person4.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person4.prototype, "setAge", {
        set: function (age) {
            if (age < 0 || age > 150) {
                console.log(">>> Tuổi không hợp lệ!");
                return;
            }
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Person4;
}());
var person4 = new Person4("phohoccode", 20, "vinh long");
console.log(">>> age", person4.getAge); // getter
person4.setAge = 169;
console.log(">>> age", person4.getAge); // getter
// Inheritance
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.describe = function () {
        return "\u0110\u00E2y l\u00E0 con ".concat(this.name, ". ").concat(this.age, " tu\u1ED5i.");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, foot) {
        var _this = _super.call(this, name, age) || this;
        _this.foot = foot;
        return _this;
    }
    Cat.prototype.describe = function () {
        return "\u0110\u00E2y l\u00E0 con m\u00E8o ".concat(this.name, ". ").concat(this.age, " tu\u1ED5i.");
    };
    return Cat;
}(Animal));
var cat = new Cat("Meo meo", 2, 4);
console.log(cat.getName());
console.log(cat.describe());
//  Static Methods and Properties
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.printPI = function () {
        return this.pi;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(">>> pi", Circle.pi);
// Abstract Classes
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month");
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
function _person(person) {
    person.name = 'phohoccode',
        person.age = 20,
        person.address = 'Vĩnh Long';
}
