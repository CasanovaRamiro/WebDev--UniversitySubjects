import { SubjectTypes } from "../types/Subjects_Types";

export function isAvailable(subject: SubjectTypes, subjects: SubjectTypes[]) {
  console.log(subjects);
  if (subject.done === true) return false;
  if (subject.correlativity[0] < 1000) return true;
  return subject.correlativity.every((e) => {
    let aux = subjects.find((sub) => sub.code === Number(e))?.done;
    return aux;
  });
}

export function parseDataTypes(subject: SubjectTypes[]): SubjectTypes[] {
  subject.forEach((e) => {
    // @ts-expect-error
    e.correlativity = e.correlativity.split(" ");
    e.correlativity.forEach((e) => Number(e));
    // @ts-expect-error
    e.done = e.done === "true" ? true : false;
    e.hours = Number(e.hours);
    e.year = Number(e.year);
    e.code = Number(e.code);
    return e;
  });
  return subject;
}
