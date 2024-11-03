type Person = {
  name: string;
  Address: string;
  HairAndEye: string;
  Color: string;
  IncomeAndExpense: number;
  Hobbies: string[];
  FamilyMembers: number;
  Job: string;
  Skills: string[];
  MaritalStatus: string;
  Friends: string[];
};

const person: Person = {
  name: "Shakil",
  Address: "Dhaka",
  HairAndEye: "Black",
  Color: "Black",
  IncomeAndExpense: 60000,
  Hobbies: ["Reading", "Gaming", "Cooking"],
  FamilyMembers: 3,
  Job: "Software Engineer",
  Skills: ["JavaScript", "TypeScript", "React", "Node.js"],
  MaritalStatus: "Married",
  Friends: ["Rahim", "Mom", "Dad"],
};

console.log(person);
