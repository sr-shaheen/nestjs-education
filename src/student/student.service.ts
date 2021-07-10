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
    const newUniversity = await new this.studentModel(createStudentDTO);
    return newUniversity.save();
  }

  async searchStudent(body: any): Promise<any> {
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
  }
  async getAllStudent(): Promise<any> {
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
  }
}
