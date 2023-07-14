"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Ausgabe
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// Fake it, `till you make it!
// if(isJohnOlder)
// if(iageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }


/************ IF - ELSE ************/

// mit Alternative

// entweder ja oder nein

// if(ageJohn > ageMark)
// {
//     console.log("John ist äter.");
// }
// else
// {
//     console.log("John ist jünger.");
// }

/************ Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF ************/
// mit alternativen Fällen (älter, gleich alt, jünger)

// 1. Test
if(isJohnOlder)
{
    console.log("John ist äter.");
}
// 1....n Alternative
else if(isJohnEqual)
{
    console.log("John ist gleich alt.");
}
// wenn alle vforherigen Tests fehlschlagen...
else
{
    console.log("John ist jünger.");
}