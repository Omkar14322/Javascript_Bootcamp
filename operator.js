// operators and expression in  js

// this is single line comments:- every thing written in comment cannot be executed.

/* multiline comments  multi line can be commented using this comments*/

console.log("operators in js");

// Arithmetic operator.
let a = 10;
let b = 3;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a * b = ", a * b)
console.log("a ** b = ", a ** b) 
console.log("a % b = ", a % b)


// console.log("++a = ", ++a)
// console.log("a++ = ", a++)
// console.log("a = ", a)
// console.log("a-- = ", a--)
// console.log("a = ", a)

console.log("Assignment operators");
let c = 9;
c += 5 //same as c = c + 5
console.log(c);

c -= 5  //same as c = c + 5
console.log("c is now=", c);

c *=  5  //same as c = c + 5
console.log("c is now=", c);

c /= 5 //same as c = c + 5
console.log("c is now=", c);

//Comparison operator
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2) //equal to
console.log("comp1 != comp2 is ", comp1 != comp2) //not equal
console.log("comp1 === comp2 is ", comp1 === comp2) // equal value and type.
console.log("comp1 !== comp2 is ", comp1 !== comp2)//not equal value or not equal type.

// logical operator
// && -->and
// ||--> or
 /*!-->not operator this will give opposite of value
console.log(!false) --> this will print true.*/

let x = 6;
let y = 7;
console.log(x<y && x==5)
console.log(x>y || x==6)
console.log(!false)
console.log(!true)