import * as mongoose from 'mongoose';
export const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  credit: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  uiversityId: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
    required: true,
  },
  departmentId: {
    type: String,
    required: true,
  },
  departmentName: {
    type: String,
    required: true,
  },

  students: {
    type: [
      {
        studentName: String,
        studentId: String,
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
