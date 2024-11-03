type Employee = {
  name: string;
  age: number;
  description: string;
  salary: number;
  department: string;
  hireDate: string;
  address?: {
    street: string;
    city: string;
    country: string;
  };
};

const addressFind = (employee: Employee): string | undefined => {
  return employee.address?.street;
};

const employee1: Employee = {
  name: "John Doe",
  age: 30,
  description: "Software Engineer",
  salary: 50000,
  department: "IT",
  hireDate: "2022-01-01",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

const employee2: Employee = {
  name: "Jane Smith",
  age: 28,
  description: "Senior Software Engineer",
  salary: 60000,
  department: "IT",
  hireDate: "2021-12-31",
};

console.log(addressFind(employee1));
console.log(addressFind(employee2));
