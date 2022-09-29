interface StudentsProps {
  name: string
  age: number
  document: number
}

export class Student {
  private props: StudentsProps;

  get student() {
    return this.props.name;
  }
  
  set age(age: number) {
    if (this.props.age > 17) {
      throw new Error('Não é permitida a matrícula de alunos com idade acima de 17 anos')
    }
    this.props.age = age
  }
  
  get age() {
    return this.props.age
  }

  get document() {
    return this.props.document
  }

  constructor(props: StudentsProps) {
    this.props = props
  }
}