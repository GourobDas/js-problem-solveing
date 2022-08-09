let first = 5;
let secound = 7;
console.log(first, secound);


//  approqch1----------------------
// const temp = first;
// first = secound;
// secound = temp;
// console.log(first, secound);
// ---------------------------------------
// approach2 Destructuring

[first, secound] = [secound, first];
console.log(first, secound);

