// console.log(Math);
//todo: static method vs instance method

/**Methods*/
// topic: abs 
const negativeNumber = -4;
// console.log(Math.abs(negativeNumber));

// topic: round
const floatingNumber1 = 4.3;
const floatingNumber2 = 4.6;
// console.log(Math.round(floatingNumber1));
// console.log(Math.round(floatingNumber2));

// topic: ceil
// console.log(Math.ceil(floatingNumber1));

// topic: floor
// console.log(Math.floor(floatingNumber2));

// topic: sqrt
// console.log(Math.sqrt(25));

// topic: pow
// console.log(Math.pow(2,3));

// topic: min and max
// console.log(Math.min(2,3,4,5,6));
// console.log(Math.max(2,3,4,5,6));

// topic: random
// info: will return random numbers between 0(inclusive) and 1(exclusive)(not including 1).
// console.log(Math.random());
// console.log((Math.random()*10)); // info: will generate number between [0,9].
// console.log((Math.random()*10) + 1); // info: will generate number between [0,9] and then 1 will added with the number.
// console.log(Math.floor(Math.random()*10) + 1); // info: will round don the number to integer.
// Practice
// topic: find a random number between specific range
const min = 5;
const max = 20;
// info: will generate a number between 0 to 15(not including 15). The range is [0,14].
Math.random() * (max - min); 

//info: It will generate numbers between 0 to 16 (not including 16). The range is [0,15]. When anyone wants to generate random numbers up to max value (inclusive).
Math.random() * (max - min + 1)

// info: random() can generate a number like 15.30274..... but the max number is 15. rounding the number is important. that's why Math.floor() is used.
Math.floor(Math.random(max - min + 1))

// info: value is between 0 to 15. But the value should be between 5 to 20. that's why min is added after rounding down the number.
Math.floor(Math.random() * (max - min + 1)) + min


console.log(Math.floor(Math.random() * (max - min + 1)) + min);
