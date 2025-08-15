let numbers = [1, 2, 3, 4, 5];
let names = ['Alice', 'Bob', 'Charlie'];

console.log(numbers);
console.log(names);

console.log(numbers.length);
console.log(names.length);

//first element
console.log(numbers[0]);
console.log(names[1]);

//last element
console.log(numbers[numbers.length - 1]);

// add an element
numbers.push(6);
console.log(numbers);

// remove the last element
numbers.pop();
console.log(numbers);

// add an element at the beginning
numbers.unshift(0);
console.log(numbers);

// remove the first element
numbers.shift();

// iterate through the array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


