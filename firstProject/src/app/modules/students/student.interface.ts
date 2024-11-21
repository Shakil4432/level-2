export type guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type studentName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: studentName;
  profileImg?: string;
  email: string;
  age: string;
  gender: "male" | "female";
  contactNo: string;
  address: {
    presentAddress: string;
    permanentAddress: string;
  };
  guardian: guardian;
  localGuardian: {
    name: string;
    contactNo: string;
  };

  bloodGroup: "A+" | "B+" | "AB+" | "A-" | "B-" | "AB-" | "O+" | "O-";
  isActive: "Active" | "Block";
};
