import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Course } from './course.model';
import { CreateCourseDTO } from './create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Course')
    private readonly courseModel: Model<Course>,
  ) {}

  async addCourse(createCourseDTO: CreateCourseDTO): Promise<Course> {
    try {
      const newCourse = await new this.courseModel(createCourseDTO);
      return await newCourse.save();
    } catch (error) {
      return;
    }
  }

  async getCourseDetails(courseId: string): Promise<any> {
    try {
      const data = await this.courseModel.aggregate([
        {
          $match: {
            _id: Types.ObjectId(courseId),
            isDeleted: false,
          },
        },
        {
          $project: {
            _id: 0,
            name: '$name',
            credit: '$credit',
            duration: '$duration',
            universityName: '$universityName',
            departmentName: '$departmentName',
            students: '$students',
          },
        },
      ]);
      return { isExecuted: true, data: data[0] };
    } catch (error) {
      return { isExecuted: false, message: error.message };
    }
  }
  async getAllCourse(): Promise<any> {
    try {
      const data = await this.courseModel.aggregate([
        {
          $match: {
            isDeleted: false,
          },
        },
        {
          $project: {
            _id: 0,
            name: '$name',
            credit: '$credit',
            duration: '$duration',
            universityName: '$universityName',
            departmentName: '$departmentName',
            noOfStudents: {
              $size: '$students',
            },
          },
        },
      ]);
      return { isExecuted: true, data };
    } catch (error) {
      return { isExecuted: false, message: error.message };
    }
  }

  async updateCourse(courseId: string, body: any): Promise<any> {
    try {
      const obj = body;
      const data = await this.courseModel.updateOne(
        { _id: courseId, isDisabled: false },
        {
          $set: obj,
        },
      );
      return { isExecuted: true, message: 'updated', data };
    } catch (error) {
      return { isExecuted: false, message: 'Not updated' };
    }
  }
}
