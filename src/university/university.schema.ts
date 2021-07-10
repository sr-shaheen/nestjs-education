import * as mongoose from 'mongoose';
export const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  department: {
    type: [
      {
        departmentName: String,
        shortForm: {
          type: String,
          uppercase: true,
        },
      },
    ],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});
