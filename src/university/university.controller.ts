import { Body, Controller, Post } from '@nestjs/common';
import { CreateUniversityDTO } from './create-university.dto';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private uiversityService: UniversityService) {}

  @Post('/create')
  async addRecipe(@Body() createUniversityDTO: CreateUniversityDTO) {
    const recipe = await this.uiversityService.addUniversity(
      createUniversityDTO,
    );
    return recipe;
  }
}
