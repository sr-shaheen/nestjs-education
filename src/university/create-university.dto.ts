/* eslint-disable @typescript-eslint/no-empty-function */
import { Query } from '@nestjs/common/decorators';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export enum UniversityCategory {
  Private = 'Private',
  Public = 'Public',
}
export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}
class departmentInfo {
  @ApiProperty()
  departmentName: string;
  @ApiProperty()
  shortForm: string;
}

export class CreateUniversityDTO {
  @ApiProperty()
  name: string;
  @ApiProperty({
    // enum: UniversityCategory,
    // enumName: 'Private',
    enum: Object.keys(UniversityCategory),
  })
  category: UniversityCategory;

  @ApiProperty({
    isArray: true,
    type: departmentInfo,
  })
  department: departmentInfo[];

  @ApiQuery({ name: 'role', enum: UserRole })
  async filterByRole(@Query('role') role: UserRole = UserRole.User) {}
  createdAt?: Date;
  isDeleted?: boolean;
}
