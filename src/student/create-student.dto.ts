export class CreateStudentDTO {
  name: string;
  cell: string;
  address: string;
  sex: string;
  universityName: string;
  universityId: string;
  departmentName: string;
  departmentId: string;
  createdAt?: Date;
  isDeleted?: boolean;
}
