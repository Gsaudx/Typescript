/**
 * In this chapter, we’ll cover some of the most common types of values you’ll find in JavaScript code,
 * and explain the corresponding ways to describe those types in TypeScript.
 * This isn’t an exhaustive list, and future chapters will describe more ways to name and use other types.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * string - "Hello World"
 * number - 42 or 42.2
 * boolean - true or false
 */
//Specify the type of an array:
{
    var myNumbers = //Array of numbers
     void 0; //Array of numbers
    var myStrings = void 0;
    //Or even:
    var myNumbersDiff = //More about this on GENERICS session*
     void 0; //More about this on GENERICS session*
    var myStringsDiff = //More about this on GENERICS session*
     void 0; //More about this on GENERICS session*
}
//TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
var obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "Hello";
/**
 * None of the following lines of code will throw compiler errors.
 * Using `any` disables all further type checking, and it is assumed
 * you know the environment better than TypeScript.
 
 * The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
 */
//Type anotations on functions
//Parameter type notations go after the parameter name:
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
/**
 * When a parameter has a type annotation, arguments to that function will be checked:
 * greet(42); -> Error
 */
/**
 * Return Type Annotations
 * You can also add return type annotations. Return type annotations appear after the parameter list:
 */
function getFavoriteNumber() {
    return 26; //This function must return a number
}
/**
 * Functions Which Return Promises
 * If you want to annotate the return type of a function which returns a promise, you should use the Promise type:
 */
function AsyncGetFavoriteNumber() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 200]; //Must return a number on the Promise
        });
    });
}
/**
 * Anonymous functions are a little bit different from function declarations.
 * When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
 * Here’s an example:
 */
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
/**
 * Even though the parameter s didn’t have a type annotation, TypeScript used the types
 * of the forEach function, along with the inferred type of the array, to determine the type s will have.

 * This process is called contextual typing because the context that the function occurred within informs what type it should have.

 * Similar to the inference rules, you don’t need to explicitly learn how this happens,
 * but understanding that it does happen can help you notice when type annotations aren’t needed.
 * Later, we’ll see more examples of how the context that a value occurs in can affect its type.
 */
// Paramters notations as objects
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
/**
 * Here, we annotated the parameter with a type with two properties - x and y - which are both of type number.
 * You can use , or ; to separate the properties, and the last separator is optional either way.
 * The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any.
 */
/**
 * Optional Properties
 * Object types can also specify that some or all of their properties are optional.
 * To do this, add a ? after the property name:
 */
function printName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()); //Without the question mark (?) TS wouuld return an error, because .last might be undefined
}
// Both OK
printName({ first: "Bob" });
/**
 * UNION TYPES
 * The first way to combine types you might see is a union type.
 * A union type is a type formed from two or more other types, representing values that may be any one of those types.
 * We refer to each of these types as the union’s members.
 */
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
/**
 * TypeScript will only allow an operation if it is valid for every member of the union.
 * For example, if you have the union string | number, you can’t use methods that are only available on string:
      function printId(id: number | string) {
        console.log(id.toUpperCase()); ---> Error
      }

 * The solution is to narrow the union with code. Narrowing occurs when TypeSCript deduce a more specific
 * type for a value based on the structure of the code:
 */
function printId2(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
//Another example using an Array type:
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
//But, sometimes we'll have an union where all the members have a property in commom
//For example, both arrays and strings have the .slice() method.
//If every member in an union has a property in common, you can use that property without narrowing:
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
// Exactly the same as the earlier example
function printCoordAlias(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function printUserId(id) {
    return id;
}
function printCoordInterface(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordInterface({ x: 100, y: 100 });
//Differences Between Type Aliases and Interfaces
/**
 * Types: Can't be re-opened to add new properties
 * Interface: Can always be extended
 */
/**
 * Extending an interface:
    interface Animal {
      name: string;
    }

    interface Bear extends Animal {
      honey: boolean;
    }

    const bear = getBear();
    bear.name;
    bear.honey;
 */
/**
 * Extending a type via inserctions
    type Animal = {
      name: string;
    }

    type Bear = Animal & {
      honey: boolean;
    }

    const bear = getBear();
    bear.name;
    bear.honey;
 */
/**
 * Type Assertions
    - STUDY ABOUT THIS I DIDN'T UNDERSTAND READING THE TYPESCRIPT DOCS
 */
/**
 * Literal types
 * Literal types are self-intuitive, they refer to a literal and specific type, like normal constants.
 * Constants can only refer to a specific type/value, and cannot be reasigned.
 * For example: const hello = "Hello World!" refers to "Hello World".
 * A literal type can be written like this:
 */
var x = "hello";
// OK
x = "hello";
// ...
//x = "howdy"; ---> Error, because the type of x is "hello", so its value can only be "hello"
/**
 * It’s not much use to have a variable that can only have one value!

 * But by combining literals into unions, you can express a much more useful concept
 * For example, functions that only accept a certain set of known values:
 */
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
//printText("G'day, mate", "centre"); ---> Error
/**
 * Numeric literal types work the same way:
 */
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
    //If A is strict equals to B, return 0
    //If not, check if A is greater than B, if it's, then return 1
    //If not, so, if A is less than B, return -1
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
//configure("automatic"); ---> Error
/**
 * Literal Inference
 * When you initialize a variable with an object, TypeScript assumes
 * that the properties of that object might change values later. For example, if you wrote code like this:
    const obj = { counter: 0 };
    if (someCondition) {
      obj.counter = 1;
    }

 * TypeScript doesn’t assume the assignment of 1 to a field which previously had 0 is an error.
 * Another way of saying this is that obj.counter must have the type number, not 0, because types are used to determine both reading and writing behavior.
 */
/**
 * Null and Undefined
 */
