import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
    const newUniversity = await new this.universityModel(createUniversityDTO);
    return newUniversity.save();
  }
  async searchUniversity(body: any): Promise<any> {
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

    return data;
  }
}
