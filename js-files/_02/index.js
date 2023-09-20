"use strict";
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
/**
 * string - "Hello World"
 * number - 42 or 42.2
 * boolean - true or false
 */
//Specify the type of an array:
{
    let myNumbers; //Array of numbers
    let myStrings;
    //Or even:
    let myNumbersDiff; //More about this on GENERICS session*
    let myStringsDiff; //More about this on GENERICS session*
}
//TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
let obj = { x: 0 };
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
    return __awaiter(this, void 0, void 0, function* () {
        return 200; //Must return a number on the Promise
    });
}
/**
 * Anonymous functions are a little bit different from function declarations.
 * When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
 * Here’s an example:
 */
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
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
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// Both OK
printName({ first: "Bob" });
