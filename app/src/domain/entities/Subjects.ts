import { Entity } from "core/domain/Entity";

type SubjectsProps = {
  math: string;
  portuguese: string;
  biology: string;
};

export class Subjects extends Entity<SubjectsProps> {
  private constructor(props: SubjectsProps, id?: string) {
    super(id, props);
  }

  create(props: SubjectsProps, id?: string) {
    const subjects = new Subjects(props, id);

    return subjects;
  }
}
