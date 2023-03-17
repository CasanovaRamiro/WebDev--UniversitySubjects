import { SubjectTypes } from "../types/Subjects_Types";
import subjects from "../data/subjects.json";

export function isAvailable(subject: SubjectTypes) {
  if (subject.done === true) return false;
  if (subject.correlativity.length === 0) return true;
  return subject.correlativity.every((e) => {
    let aux = subjects.find((sub) => sub.code === e)?.done;
    return aux;
  });
}
