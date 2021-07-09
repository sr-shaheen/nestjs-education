import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';
import { CoursesModule } from './courses/courses.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [UniversityModule, CoursesModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
