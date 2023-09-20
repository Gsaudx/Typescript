console.log("Hello World!");

//By default, Typescript compiles the .ts code to an old JS version, the ES3 (Ecma Script 3), however, we can specify to compile our code to a newer version using:
//tsc --target es2015 fileName.ts
//This will compile our code to a newer version of JavaScript. 


//Type notation - person: string
//Type notation is the ability to indicate to typescript what value we're expecting something to receive (a function, a variable, an object etc).
//Note: We don't always need to write explicit type notation, as typescript can infer the types automatically.
function testScope(name: string = "Fulano", id: number = 0) {
    console.log("This user name is " + name + " and its ID is: " + id);
}

testScope();


function greet1(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
// greet("Maddison", Date()); -- This returns an error, because Date() returns a string, but new Date() returns what we're expecting:
greet1("Guilherme", new Date());


//More than one type of value in a variable (union type):
let birthYear: string | number;


//Browsers can't understand typescript code, so we gotta compile this.
//To copile a typescript code, we just need to run 'tsc file_name' in the cosole.

/**
 * If you want to specify the name of the output file:

    - tsc index.ts --outfile file-name.js

    If you want TSC to compile your code automatically, whenever you make a change, add the "watch" flag:

    - tsc index.ts -w
 */

//For example, this function takes either a string or an array
function getLength(obj: string | string[]) {
        return obj.length;
    }

//And we can also return values depending on whether it's passed as arguments
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }

