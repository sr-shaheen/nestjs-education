export class CreateUniversityDTO {
  name: string;
  category: string;
  department: any[];
  createdAt?: Date;
  isDeleted?: boolean;
}
