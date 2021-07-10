import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUniversityDTO } from './create-university.dto';
import { University } from './university.model';

@Injectable()
export class UniversityService {
  constructor(
    @InjectModel('University')
    private readonly universityModel: Model<University>,
  ) {}

  async addUniversity(
    createUniversityDTO: CreateUniversityDTO,
  ): Promise<University> {
    try {
      const newUniversity = await new this.universityModel(createUniversityDTO);
      return newUniversity.save();
    } catch (error) {
      return;
    }
  }
  async searchUniversity(body: any): Promise<any> {
    try {
      const regexp = new RegExp(`^.*${body.name}.*`, 'gmi');

      const data = await this.universityModel.aggregate([
        {
          $match: {
            $and: [
              {
                $or: [{ name: regexp }],
              },
              {
                isDeleted: false,
              },
            ],
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
          },
        },
        {
          $project: {
            _id: 0,
            id: '$_id',
            name: 1,
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

  async getUniversityDepartment(universityId: string): Promise<any> {
    try {
      const data = await this.universityModel.aggregate([
        {
          $match: {
            _id: Types.ObjectId(universityId),
            isDeleted: false,
          },
        },
        {
          $project: {
            _id: 0,
            name: '$name',
            department: '$department',
          },
        },
      ]);
      return { isExecuted: true, data: data[0] };
    } catch (error) {
      return { isExecuted: true, message: error.message };
    }
  }
}
