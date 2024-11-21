{
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(dayHours: string) {
      return `Mr ${this.name} sleep ${dayHours} a day`;
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Shakil", 20, "Dhaka");
  console.log(student1);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(totalClass: number) {
      return `Mr ${this.name} is teaching class ${totalClass}`;
    }
  }

  const teacher1 = new Teacher("Shahidul", 30, "Dhaka", "Assistant Professor");
  console.log(teacher1);
}
