import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDTO } from './create-student.dto';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student')
    private readonly studentModel: Model<Student>,
  ) {}

  async addStudent(createStudentDTO: CreateStudentDTO): Promise<Student> {
    try {
      const newUniversity = await new this.studentModel(createStudentDTO);
      return await newUniversity.save();
    } catch (error) {
      return;
    }
  }

  async searchStudent(body: any): Promise<any> {
    try {
      const regexp = new RegExp(`^.*${body.name}.*`, 'gmi');

      const data = await this.studentModel.aggregate([
        {
          $match: {
            $and: [
              {
                $or: [{ name: regexp }],
              },
              {
                isDisabled: false,
                universityId: body.universityId,
                departmentId: body.departmentId,
              },
            ],
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            cell: 1,
            address: 1,
            sex: 1,
          },
        },
        {
          $limit: 10,
        },
      ]);
      return { isExecuted: true, data };
    } catch (error) {
      return { isExecuted: false, message: error.message };
    }
  }
  async getAllStudent(): Promise<any> {
    try {
      const data = await this.studentModel.aggregate([
        {
          $match: {
            isDisabled: false,
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            cell: 1,
            address: 1,
            sex: 1,
            universityName: 1,
            departmentName: 1,
          },
        },
        {
          $limit: 10,
        },
      ]);

      return { isExecuted: true, data };
    } catch (error) {
      return { isExecuted: false, message: error.message };
    }
  }
}
