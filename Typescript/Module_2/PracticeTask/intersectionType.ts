{
  interface User {
    name: string;
    email: string;
  }

  interface Admin {
    adminLevel: number;
  }

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `The user is ${user.name}, with email ${user.email}. His admin level is ${user.adminLevel}.`;
  };

  const user: AdminUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    adminLevel: 10,
  };

  console.log(describeAdmin(user));
}
