import * as mongoose from 'mongoose';
export const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cell: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
    required: true,
  },
  universityId: {
    type: String,
    required: true,
  },
  departmentName: {
    type: String,
    required: true,
  },
  departmentId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  isDisabled: {
    type: Boolean,
    required: true,
    default: false,
  },
});
