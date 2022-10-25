export interface StudentProps {
  name: string;
  age: number;
  createdAt?: Date;
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
    const { age } = props;

    if (age < 17) {
      throw new Error("Invalid Parameters");
    }

    this.props = props;
  }
}
