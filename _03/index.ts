//Narrowing
//Is the ability of TypeScript to identify whether we are checking for the type assigned to a variable or not.

/**
 * The function below returns an error because padding can be a number or a string, but the .repeat() function accepts only numbers
 
function padLeft(padding: number | string, input: string) {
  return " ".repeat(padding) + input;
}

 * We can fix that by checking whether padding is a number or not:
*/
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
//These special checks we code to evaluate the type of a variable are called TYPE GUARDS.
//It looks at these special checks and assignments, and the process of refining types to more specific types than declared is called NARROWING

/**
 * TYPE OF TYPE GUARDS
 * JavaScript has the typeof operator, which can give basic information about the type of something.
 * When typeof is used, TypeScript expects this to return a certain set of strings:
    * "string"
    * "number"
    * "bigint"
    * "boolean"
    * "symbol"
    * "undefined"
    * "object"
    * "function"

 * In TypeScript, checking the value returned by typeof is a TYPE GUARD.
 * However, check the function below:

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
 
 * TypeScript will return this error even if we check if strs is an object (in JS arrays are objects), but why?
 * That's because null is also an object in JavaScript
 * In this case, when we use typeof strs === "object", TypeScript narrowed strs down to string[] | null, as both are objects in JS.
 */