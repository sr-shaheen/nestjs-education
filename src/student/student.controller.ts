import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentDTO } from './create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('/create')
  async addStudent(@Body() createUniversityDTO: CreateStudentDTO) {
    const student = await this.studentService.addStudent(createUniversityDTO);
    return student;
  }

  @Post('/search')
  async getStudentSearch(@Body() bodyData: any) {
    const data = await this.studentService.searchStudent(bodyData);
    return data;
  }
}
