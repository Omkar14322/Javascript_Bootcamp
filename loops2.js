//for in loops is a special type of a loop that iterates over the properties of an object,or element of an array.
// for(variable in object){
//     //code
// }
// example of for..in.

// creating object of students
// let st1 = {
//     name: "HariOm",
//     phone: 9885,
//     address: "lko",
// };

// console.log(st1);
// console.log(typeof st1);

// for(let k in st1){
//     console.log(`${k}=> ${st1[k]}`); //this will print all the element of the object st1.
// }


// let ar = ["ABC", "XYZ", "LMN"];
// for(let s in ar){
//     // console.log(s) // address of object. 
//     console.log(ar[s]);
// }

// for...of loops.
// for-of loop which allows us to iterate over arrays or other iterable objects(e.g string) very easily.
// for(variable of iterableObject){
//     //code to be executed
// }

let arr = ["ABC", "XYZ", "LMN"];
console.log(arr);

for(let item of arr){
    //but this cant traverse object.
    console.log(item );// this will print item present in array.
}

for(let item in arr){
    console.log(item);// this will print key/address of item.
}
for(let item in arr){
    //this can traverse object.
    console.log(arr[item]);// this will print values of item.
}
