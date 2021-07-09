import { Module } from '@nestjs/common';
import { UniversityController } from './university.controller';

@Module({
  controllers: [UniversityController],
})
export class UniversityModule {}
