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
{
let myNumbers: number[]; //Array of numbers
let myStrings: string[];
//Or even:
let myNumbersDiff: Array<number>; //More about this on GENERICS session*
let myStringsDiff: Array<string>; //More about this on GENERICS session*
}

//TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
let obj: any = { x: 0 };
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
function greet(name: string) {
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
function getFavoriteNumber(): number {
  return 26; //This function must return a number
}

/**
 * Functions Which Return Promises
 * If you want to annotate the return type of a function which returns a promise, you should use the Promise type:
 */
async function AsyncGetFavoriteNumber(): Promise<number> {
  return 200; //Must return a number on the Promise
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
