import { expect, test } from "vitest";

import { Student } from "./Student";

test("Should create a new student", () => {
  const student = new Student({
    name: "Marcelo",
    age: 44,
  });

  expect(student).toBeInstanceOf(Student);
  expect(student.name).toEqual("Marcelo");
});
