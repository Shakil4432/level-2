"use strict";
{
    const returnStringArray = (params) => {
        return [params];
    };
    const returnArrayWithGeneric = (params) => {
        return [params];
    };
    const result1 = returnArrayWithGeneric({
        name: "Shakil",
        id: 234,
    });
    const returnArrayWithTuple = (params, params2) => {
        return [params, params2];
    };
    const res1 = returnArrayWithTuple("bangladesh", "nepal");
    const res2 = returnArrayWithTuple("Bangladesh", 3333);
    const res3 = returnArrayWithTuple("Shakil", {
        name: "shakil",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const res4 = addCourseToStudent({
        name: "Shakil Hossain",
        email: "Shakil@gmail.com",
        devType: "fullStack",
    });
}
