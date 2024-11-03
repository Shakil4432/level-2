{
  type Vehicle = {
    name: string;
    age: number;
    email: string;
  };

  type Vehicle1 = "name" | "age" | "email";

  type Vehicle3 = keyof Vehicle;

  const returnPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = { name: "Shakil", age: 36, email: "Shaikil@gail.com" };

  const res1 = returnPropertyValue(user, "age");
}
