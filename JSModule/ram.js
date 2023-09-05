// export let var1 = 3254;

// export function display() {
//     console.log("this is message from ram.js files");
//     console.log(var1);
// }

//Default export should be only one. 

 let var1 = 3254;

 function display() {
    console.log("this is message from ram.js files");
    console.log(var1);
}

export default function myDefaoultFunction()
{
    console.log("this is my default function");
}



//we can also export like this.
export {var1,display}