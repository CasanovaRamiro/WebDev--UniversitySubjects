import { SubjectTypes } from "../types/Subjects_Types";

type Props = {
  subjects: SubjectTypes[];
};

function StatusByYear({ subjects }: Props) {
  let firstYearSubjects = subjects.filter((e) => e.year === 1);
  let secondYearSubjects = subjects.filter((e) => e.year === 2);
  let thirdYearSubjects = subjects.filter((e) => e.year === 3);
  return (
    <ul>
      <li>
        First Year:{" "}
        {(
          firstYearSubjects.filter((e) => e.done === true).length /
          firstYearSubjects.length
        ).toLocaleString("en", { style: "percent" })}
      </li>
      <li>
        Second Year:{" "}
        {(
          secondYearSubjects.filter((e) => e.done === true).length /
          secondYearSubjects.length
        ).toLocaleString("en", { style: "percent" })}
      </li>
      <li>
        Third Year:{" "}
        {(
          thirdYearSubjects.filter((e) => e.done === true).length /
          thirdYearSubjects.length
        ).toLocaleString("en", { style: "percent" })}
      </li>
    </ul>
  );
}

export default StatusByYear;
