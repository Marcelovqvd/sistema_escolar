import { expect, test } from 'vitest'
import { Student } from './Students'

test('Should be able to create a student wich age is less than 17', () => {
  const student = new Student({
    name: 'Marcelo',
    age: 17,
    document: 123456
  })

  expect(student).toBeInstanceOf(Student)
  expect(student.age).toBe(17)
})
