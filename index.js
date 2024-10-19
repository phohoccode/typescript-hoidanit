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
// object
var user4 = {
    name: "phohoccode",
    age: 19,
    address: "vietnam",
    course: ["javascript, typescript, nodejs, reactjs, expressjs"],
};
// Tuple -> mảng cố định với số lượng phần tử
// -> mỗi phần tử có kiểu dữ liệu xác định
var tech = ["javascript", 2];
// Optional tuple -> cho phép một số phần tử trong tuple có thể không bắt buộc
var tech2 = [2, "typescript"];
// enum -> tập hợp các giá trị cố định
var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDDING"] = "PENDDING";
    API_STATUS["FULFILLED"] = "FULFILLED";
    API_STATUS["REJECTED"] = "REJECTED";
})(API_STATUS || (API_STATUS = {}));
var a1 = API_STATUS.PENDDING;
// any -> không bị kiểm tra kiểu bởi typescript
var check = "phohoccode";
check = true;
check = 2;
// void -> một hàm không trả về giá trị
var handleLogs = function (message) {
    console.log(">>> message: ", message);
};
// never -> một hàm hoặc biểu thức sẽ không bao giờ hoàn thành thành công.
function throwError(message) {
    throw new Error(message);
}
// union -> cho phép một biến hoặc một tham số có thể mang nhiều kiểu dữ liệu khác nhau
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
// function type
function log(message) {
    console.log(message);
}
log("hi ae!");
var log2 = function (message) {
    console.log(message);
};
log2("phohoccode");
// Optional Parameters ->  cho phép khai báo một tham số có thể có hoặc không được truyền vào hàm
var sum4 = function (x, y, z) {
    return x + y + (z !== null && z !== void 0 ? z : 0);
    //   return z ? x + y + z : x + y;
};
// Default parammeters -> cho phép chỉ định giá trị mặc định cho một tham số trong hàm
var sum5 = function (a, b, z) {
    if (z === void 0) { z = 0; }
    return a + b + z;
};
//  Rest Parameters ->  cho phép truyền một số lượng không xác định các đối số
// cho một hàm và gom chúng lại thành một mảng
var sum6 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    numbers.forEach(function (number) { return (sum += number); });
    return sum;
};
var multiply = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return x * n; });
};
function _person(person) {
    (person.name = "phohoccode"),
        (person.age = 20),
        (person.address = "Vĩnh Long");
}
function sum8(a, b) {
    return a + b;
}
// class
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
person4.setAge = 169;
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
