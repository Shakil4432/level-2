"use strict";
// learning function
// normal function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
const addArrow = (num1, num2) => num1 + num2;
// Object->function->method
const addUser = {
    name: "Shakil",
    balance: 0,
    addMyBalance(balance) {
        return (`my total balance is ${this.balance + balance}`);
    }
};
const newArray = [1, 2, 3, 44, 55];
const arrayMap = newArray.map((sq) => sq * sq);
