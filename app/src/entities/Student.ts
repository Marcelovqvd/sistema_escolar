export interface StudentProps {
  name: string;
  age: number;
  createdAt: Date;
}

export class Student {
  private props: StudentProps;

  get name() {
    return this.props.name;
  }

  get age() {
    return this.props.age;
  }

  constructor(props: StudentProps) {
    this.props = props;
  }
}
