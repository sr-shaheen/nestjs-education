import { Document } from 'mongoose';
export interface Student extends Document {
  name: string;
  cell: string;
  address: string;
  sex: string;
  universityName: string;
  universityId: string;
  departmentName: string;
  departmentId: string;
  createdAt?: Date;
  isDeleted?: boolean;
}
