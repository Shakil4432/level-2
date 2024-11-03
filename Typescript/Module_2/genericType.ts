type GenericType<T> = Array<T>;

// const digit: number[] = [1, 3, 4, 4];
const digit: GenericType<number> = [1, 3, 4, 4];

// const stringType: string[] = ["2", "Shakil", "887"];
const stringType: GenericType<string> = ["2", "Shakil", "887"];

// const booleanType: boolean[] = [true, false, true];
const booleanType: GenericType<boolean> = [true, false, true];

type User1 = {
  name: string;
  age: number;
  address: string;
};

const arrayObject: GenericType<User1> = [
  {
    name: "shakil",
    age: 25,
    address: "Dhaka",
  },
  {
    name: "shakil",
    age: 25,
    address: "Dhaka",
  },
];

type GenericTuple<X, Y> = [X, Y];
const normalArray: GenericTuple<string, string> = ["Mr. S", "Mr.Y"];

const arrayWithObject: GenericTuple<number, { name: string; email: string }> = [
  1234,
  { name: "shakil", email: "shail3334@gmail.com" },
];
