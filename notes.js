var numbers = [3, 56, 2, 48, 5]; 


// Map create a new array by doing something with each item
function double(x){
    return x * 2;
}

const newNumbers = numbers.map(function (x) {
    return x * 2; 
}); // its gong to expect a function. 
console.log(newNumbers); 


// Filter - Creates a new array by keeping the items that only returns true
const newNumbers1 = numbers.filter(function (num){
    return num < 10; 
});

console.log(newNumbers1); 


// Reduce - Accumulates a value by doing something to each item in an array
var newNumber2 = numbers.reduce(function (accumulator, currentNumber) {
    console.log("accumulator = " + accumulator); 
    console.log("currentNumber = " + currentNumber); 
        return accumulator + currentNumber;
}); 


console.log(newNumber2); 


// Find - returns the first item that satisfies a condition
const newNumber3 = numbers.find(function (num) {
    return num > 10;
})

console.log(newNumber3);


// FindIndex - returns the first index that satisfies a condition
const newIndex = numbers.findIndex(function (num) {
    return num > 10;
})

console.log(newIndex);