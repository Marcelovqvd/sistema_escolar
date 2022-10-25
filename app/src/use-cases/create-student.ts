interface CreateStudentRequest {
  name: string;
  age: number;
}

type CreateStudentResponse = CreateStudentRequest;

export class CreateStudent {
  async execute({
    name,
    age,
  }: CreateStudentRequest): Promise<CreateStudentResponse> {
    const student = {
      name,
      age,
    };

    return student;
  }
}
