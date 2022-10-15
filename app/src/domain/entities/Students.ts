import { Entity } from "core/domain/Entity";

type StudentsProps = {
  name: string;
  document: string;
};

export class Students extends Entity<StudentsProps> {
  private constructor(props: StudentsProps, id?: string) {
    super(props, id);
  }

  create(props: StudentsProps, id?: string) {
    const student = new Students(props, id);

    return student;
  }
}
