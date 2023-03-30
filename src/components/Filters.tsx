import { useEffect, useState } from "react";
// import subjects from "../data/subjects.json";
import { SubjectTypes } from "../types/Subjects_Types";
import { isAvailable } from "./controllers";
type Props = {
  setFilteredSubjects: any;
  subjects: SubjectTypes[];
};
function Filters({ setFilteredSubjects, subjects }: Props) {
  const [filter, setFilter] = useState("all");

  const filterSubjects = () => {
    if (filter === "all") return subjects;

    if (filter === "completed") return subjects.filter((e) => e.done === true);
    if (filter === "missing") return subjects.filter((e) => e.done === false);
    if (filter === "available")
      return subjects.filter((e) => isAvailable(e, subjects));
  };
  useEffect(() => {
    setFilteredSubjects(filterSubjects());
  }, [filter]);
  let selectStyle = "border rounded border-slate-500 ";
  return (
    <div className="h-20 my-5 ">
      <select
        className={selectStyle}
        name="select"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue={"all"}
      >
        <option value="all">Todas</option>
        <option value="completed">Terminadas</option>
        <option value="missing">Faltantes</option>
        <option value="available">Disponibles</option>
      </select>
    </div>
  );
}

export default Filters;
