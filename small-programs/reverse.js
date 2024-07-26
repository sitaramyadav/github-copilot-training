// : Write a program to reverse a string and convert it to uppercase
function reverseAndUppercase(str) {
    return str.split('').reverse().join('').toUpperCase();
}

const input = 'Hello, World!';
const reversedAndUppercased = reverseAndUppercase(input);
console.log(reversedAndUppercased);