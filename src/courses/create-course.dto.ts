export class CreateCourseDTO {
  name: string;
  credit: string;
  duration: string;
  uiversityId: string;
  universityName: string;
  departmentId: string;
  departmentName: string;
  students: any[];
  createdAt?: Date;
  isDeleted?: boolean;
}
