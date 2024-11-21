import { Schema, model, connect } from "mongoose";
import { guardian, Student, studentName } from "./students/student.interface";

const studentNameSchema = new Schema<studentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: studentNameSchema,
  profileImg: { type: String },
  email: { type: String, required: true, unique: true },
  age: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  contactNo: { type: String, required: true },
  address: {
    permanentAddress: { type: String, required: true },
    presentAddress: { type: String, required: true },
  },
  guardian: guardianSchema,
  localGuardian: {
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "B+", "AB+", "A-", "B-", "AB-", "O+", "O-"],
  },
  isActive: {
    type: String,
    enum: ["Active", "Block"],
    default: "Active",
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
