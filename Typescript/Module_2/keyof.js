"use strict";
{
    const returnPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = { name: "Shakil", age: 36, email: "Shaikil@gail.com" };
    const res1 = returnPropertyValue(user, "age");
}
