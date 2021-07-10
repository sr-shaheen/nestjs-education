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
}
