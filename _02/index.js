/**
 * In this chapter, we’ll cover some of the most common types of values you’ll find in JavaScript code,
 * and explain the corresponding ways to describe those types in TypeScript.
 * This isn’t an exhaustive list, and future chapters will describe more ways to name and use other types.
 */
/**
 * string - "Hello World"
 * number - 42 or 42.2
 * boolean - true or false
 */
//Specify the type of an array:
let myNumbers; //Array of numbers
let myStrings;
//Or even:
let myNumbersDiff; //More about this on GENERICS session*
let myStringsDiff; //More about this on GENERICS session*
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
