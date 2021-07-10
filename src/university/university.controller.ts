import { Body, Param, Controller, Post, Get } from '@nestjs/common';
import { CreateUniversityDTO } from './create-university.dto';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private uiversityService: UniversityService) {}

  @Post('/create')
  async addUniversity(@Body() createUniversityDTO: CreateUniversityDTO) {
    const recipe = await this.uiversityService.addUniversity(
      createUniversityDTO,
    );
    return recipe;
  }

  @Post('/search')
  async getUniversitySearch(@Body() bodyData: any) {
    const data = await this.uiversityService.searchUniversity(bodyData);
    return data;
  }
  @Get('/:id')
  async getUniversityById(@Param('id') id: string) {
    const data = await this.uiversityService.getUniversityDepartment(id);
    return data;
  }
}
