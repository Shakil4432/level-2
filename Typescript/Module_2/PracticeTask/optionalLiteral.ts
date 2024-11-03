type OptionalLiteral = (
  name: string,
  age: number,
  role: "admin" | "user" | "guest"
) => { name: string; age: number; role: string };

const optionalLiteral: OptionalLiteral = (name, age, role) => {
  return {
    name,
    age,
    role,
  };
};

const res1 = optionalLiteral("Shakil", 4432, "admin");
console.log(res1);
