import { Document } from 'mongoose';
export interface University extends Document {
  name: string;
  category: string;
  department: Department[];
  createdAt?: Date;
  isDeleted?: boolean;
}
export interface Department {
  departmentName: string;
  shortForm: string;
}
