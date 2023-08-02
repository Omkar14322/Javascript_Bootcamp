
// let used to declare a block scoped variables
let a = 57; // a contains 57
console.log(a)

a = "ranjan"
console.log(a)

// let 8a = 4; //declaration cannot be start from numnbe.
// let var = 4; this will throw error some var and keywords are reserved.
// javascript is case sensitive

// difference between var and let

// var can be redeclare but not let.
var b = 34;
var b = "O";

let e = "O";

let c = "Hero";
 var f = null;

 var d = undefined

 console.log(d)
 console.log(f)
 {
    //block scoped varibles
     let b = "this"
     console.log(b)
 }

 {
    var b = "uttam"
    console.log(b);
 }
 console.log(b)
 console.log(c)

 // const cant be redeclare and change.
 const author = "Om";
 console.log(author)

//  this will throw error const must be initialize during declaration.
//  const om; 


