type FrontendDeveloper = "DanaiFanai Developer" | "junior Developer ";

const frontendDeveloper: FrontendDeveloper = "DanaiFanai Developer";

type FullstackDeveloper = "fakibaz Developer" | "expertise Developer";

const fullstackDeveloper: FullstackDeveloper = "expertise Developer";

type Developer = FrontendDeveloper | FullstackDeveloper;

const developer: Developer = "expertise Developer";

type User = {
  name: string;
  age: number;
  gender: "male" | "female";
  blood: "O+" | "A+" | "B+" | "AB+";
};

const user: User = {
  name: "Shakil Hossain",
  age: 24,
  gender: "male",
  blood: "O+",
};

type FrontendDeveloper2 = {
  skills: string[];
  designation1: "frontend developer";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "backend developer";
};

type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper;

const fullstackDeveloper2: FullstackDeveloper2 = {
  skills: ["css", "html", "node", "express"],
  designation1: "frontend developer",
  designation2: "backend developer",
};

console.log(fullstackDeveloper2);
