import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Post('/create')
  async addUniversity(@Body() createCourseDTO: CreateCourseDTO) {
    const course = await this.courseService.addCourse(createCourseDTO);
    return course;
  }

  @Get('details/:id')
  async getUniversityById(@Param('id') id: string) {
    const data = await this.courseService.getCourseDetails(id);
    return data;
  }
  @Get('/all')
  async getAllCourses() {
    const data = await this.courseService.getAllCourse();
    return data;
  }
}
