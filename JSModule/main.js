console.log("ready");
console.log(new Date().toString());

//Modules--> if we have large code then manage it in a single file.
//to use module we have to import and export.

// import {var1, display} from './fileName'
import {var1,display} from './ram.js'
import  myDefaoultFunction from './ram.js';

myDefaoultFunction()
console.log(var1);
display();