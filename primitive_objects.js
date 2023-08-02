// primtitive data types are fundamental data types it is basically of 7 types.
// types of data types.data
// null, number, Symbol,string, boolean, bigint, undefined 

// nn, ss, bb, u
let a = null;   //explicitly saying that it doesnt contain anything.
let b = 785;
let c = Symbol("Hi, I am symbol");
let d = "Gujrat"
let e = BigInt("234") + BigInt("3");
let f = true; // this can be false also.
let g = undefined;  // this variable is not defined

console.log(a,b,c,d,e,f,g);

// findin the type of variables
console.log(typeof e);

// Non primitives data types - objects - key value pairs.

const item = {
    "shubh": true,
    "lovish": 78,
    "virat": undefined,
    "hariom": false,
}
console.log(item["shubh"]);