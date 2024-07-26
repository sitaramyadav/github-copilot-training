// ❏ Task: Create a simple calculator that takes user input, performs basic arithmetic
// operations, and includes error handling for invalid inputs.
// ❏ Objective: Practice using GitHub Copilot for handling user input, implementing error handling,
// and providing user feedback.


// ❏ Step 1: Create a simple calculator that takes user input, performs basic arithmetic operations, and includes error handling for invalid inputs.
//    - Create a class named Calculator.

class Calculator {
    //    - Create a constructor method that initializes the class with a property named result set to 0.
    constructor() {
        this.result = 0;
    }
    
    //    - Create a method named add that takes a number as an argument and adds it to the result property.
    add(number) {
        this.result += number;
    }
    
    //    - Create a method named subtract that takes a number as an argument and subtracts it from the result property.
    subtract(number) {
        this.result -= number;
    }
    
    //    - Create a method named multiply that takes a number as an argument and multiplies it with the result property.
    multiply(number) {
        this.result *= number;
    }
    
    //    - Create a method named divide that takes a number as an argument and divides the result property by the number.
    divide(number) {
        this.result /= number;
    }
    
    //    - Create a method named getResult that returns the result property.
    getResult() {
        return this.result;
    }
    }


// ❏ Step 2: Implement error handling for invalid inputs.

//    - Modify the add, subtract, multiply, and divide methods to check if the argument is a number.

