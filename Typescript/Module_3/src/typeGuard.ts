{
  type Alphaneumaric = string | number;

  const add = (value1: Alphaneumaric, value2: Alphaneumaric): Alphaneumaric => {
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 + value2;
    } else {
      return value1.toString() + value2.toString();
    }
  };

  const res1 = add(10, 20);
  const res2 = add("10", "20");

  console.log(res1);
  console.log(res2);

  //   in Guard

  type NormalPerson = {
    name: string;
  };

  type AdminPerson = {
    name: string;
    role: string;
  };

  const normalPerson: NormalPerson = {
    name: "John Doe",
  };
  const adminPerson: AdminPerson = {
    name: "Shakil",
    role: "Admin",
  };

  const addPerson = (user: NormalPerson | AdminPerson) => {
    if ("role" in user) {
      return `The user ${user.name} is an ${user.role}`;
    } else {
      return `The user ${user.name} is a normal person`;
    }
  };

  const res3 = addPerson(normalPerson);
  const res4 = addPerson(adminPerson);
  console.log(res3);
  console.log(res4);
}
