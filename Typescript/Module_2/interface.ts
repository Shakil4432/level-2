{
  // type User1 = {
  //   name: string;
  //   age: number;
  // };

  // interface User2 {
  //   name: string;
  //   age: number;
  // }

  // const user2: User2 = {
  //   name: "Shakil Hossain",
  //   age: 54,
  // };

  // // intersection with type

  // type User3 = User1 & { role: string };

  // const user1: User3 = {
  //   name: "Shakil Hossain",
  //   age: 34,
  //   role: "Developer",
  // };

  // // intersection with interface;

  // interface User4 extends User1 {
  //   role: string;
  // }

  // const user4: User4 = {
  //   name: "Shakil Hossain",
  //   age: 23,
  //   role: "Developer",
  // };

  // array using interface and type;

  type User1 = number[];

  const user1: User1 = [1, 2, 3];

  interface User2 {
    [index: number]: number;
  }

  const user2: User2 = [1, 2, 3];

  // function

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };

  add(2, 4);
}
