//Number guess game:
"use strict";
let input = prompt("Guess a number from 1 to 10");
let formatedInput = input == null ? 0 : parseInt(input);
const random = Math.floor(Math.random() * 10 + 1);
