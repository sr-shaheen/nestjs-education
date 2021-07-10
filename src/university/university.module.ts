import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversityController } from './university.controller';
import { UniversitySchema } from './university.schema';
import { UniversityService } from './university.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'University', schema: UniversitySchema },
    ]),
  ],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
