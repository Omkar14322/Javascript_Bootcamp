// Q1). create a variable of type string and try to add a number to it.

let a = "you";
let b = "143";

// here concatination will be done
console.log(a + b);

// finding data type by using typeof operator

console.log(typeof(a+b));

//cant change a value in constant but updation  and addition can be done.
const c = {
    name:"rohan",
    section: 1,
    principal: false,
}
// c = "rohan";
c['friend'] = "lovish" // addition to object.
c['name'] = "kiran"// updating name in object.
console.log(c);

const dict = {
    empath:"ability to psychologically identify with the emotions, thoughts, or attitudes of others.",
    quiddity:"he essential nature of a thing",
    zhuzh:"to make something more lively and interesting,stylish ",
    skullduggery:" dishonesty or trickery",
    twee:"affectedly dainty or quaint",
}

console.log(dict);

