"use strict";
let anything;
anything = "Next Level Web Development";
anything = 333;
anything.toFixed;
const kgToGm = (value) => {
    if (typeof value === "string") {
        const convert = parseFloat(value) * 1000;
        return `kg to gram is ${convert}`;
    }
    else {
        return value * 1000;
    }
};
const result1 = kgToGm(1000);
const result2 = kgToGm("2000");
try {
}
catch (error) {
    console.log(error.message);
}
