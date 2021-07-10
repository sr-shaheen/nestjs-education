import { Document } from 'mongoose';
export interface Course extends Document {
  name: string;
  credit: string;
  duration: string;
  uiversityId: string;
  universityName: string;
  departmentId: string;
  departmentName: string;
  students: Students[];
  createdAt?: Date;
  isDeleted?: boolean;
}
export interface Students {
  studentName: string;
  studentId: string;
}
