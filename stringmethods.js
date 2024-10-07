import input from "../input.js";

let txt = "BenikémLiverpoolW3Schools"

// 1. feladat
console.log(txt.slice(0,5))

// 2. feladat
console.log(txt.slice(1,9))

// 3. feladat
console.log(txt.slice(4))

// 4. feladat
console.log(txt.slice(4,10))

// 5. feladat
console.log(txt.toUpperCase())

// 6. feladat
let strg = ""
for(let i = 0; i< txt.length;i++)
{
    if(i%2 == 0)
       strg += txt[i].toUpperCase();
    else
        strg += txt[i].toLowerCase();
}
console.log(strg)

// 7. feladat
console.log(txt.replaceAll("e","E"))

// 8. feladat
console.log(txt.split("e"))