// topic: how to declare number type variable
// implicitly
const score = 400;
// console.log(typeof score); //number
// console.log(Object.getPrototypeOf(score));
// explicity
const balance = new Number(4000);
// console.log(typeof balance); //object
// console.log(Object.getPrototypeOf(balance));


// topic: Number to String - toString
// console.log(balance.toString()); // it can access the String built in methods
// topic: toFixed
// console.log(balance.toFixed(3));

// topic: toPrecision
// todo: toPrecision method in details
const floatingNumber1 = 23.8966;
const floatingNumber2 = 23.7866;
const floatingNumber3 = 123.7866;
const floatingNumber4 = 1123.7866;
// console.log(floatingNumber1.toPrecision(3));
// console.log(floatingNumber2.toPrecision(3));
// console.log(floatingNumber3.toPrecision(3));
// console.log(floatingNumber4.toPrecision(3));


// topic: toLocalString
const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-BD'));

