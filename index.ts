function testScope(name: string = "Fulano", id: number = 0) {
    console.log("This user name is " + name + " and its ID is: " + id);
}

testScope();


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