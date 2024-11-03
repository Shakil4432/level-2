{
  const returnStringArray = (params: string): string[] => {
    return [params];
  };

  const returnArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  interface User {
    name: string;
    id: number;
  }

  const result1 = returnArrayWithGeneric<User>({
    name: "Shakil",
    id: 234,
  });

  const returnArrayWithTuple = <X, Y>(params: X, params2: Y): [X, Y] => {
    return [params, params2];
  };
  interface User1 {
    name: string;
  }

  const res1 = returnArrayWithTuple<string, string>("bangladesh", "nepal");
  const res2 = returnArrayWithTuple<string, number>("Bangladesh", 3333);
  const res3 = returnArrayWithTuple<string, User1>("Shakil", {
    name: "shakil",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  interface Developer1 {
    name: string;
    email: string;
    devType: string;
  }

  const res4 = addCourseToStudent<Developer1>({
    name: "Shakil Hossain",
    email: "Shakil@gmail.com",
    devType: "fullStack",
  });
}
