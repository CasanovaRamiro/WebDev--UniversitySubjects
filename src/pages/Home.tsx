import { useState, useEffect } from "react";
import axios from "axios";

import Filters from "../components/Filters";
import Row from "../components/Row";
import StatusByYear from "../components/StatusByYear";
import Papa from "papaparse";
import { SubjectTypes } from "../types/Subjects_Types";
import { isAvailable, parseDataTypes } from "../components/controllers";
function Home() {
  const [subjects, setSubjects] = useState<SubjectTypes[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const fetchSubjects = async (): Promise<SubjectTypes[]> => {
    return await axios
      .get(import.meta.env.VITE_API_URL, { responseType: "blob" })
      .then(
        (response) =>
          new Promise<SubjectTypes[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => resolve(results.data as SubjectTypes[]),
              error: (error) => reject(error.message),
            });
          })
      );
  };

  useEffect(() => {
    fetchSubjects()
      .then((response) => {
        setSubjects(parseDataTypes(response));
      })
      .catch((error) => console.log(error.message));
  }, []);

  if (subjects.length !== 0) {
    return (
      <div className="mb-12 grid grid-flow-row auto-rows-max text-center gap-y-px	max-w-7xl mt-20 ">
        <span className="lg:w-full text-4xl font-bold border-b-2 border-stone-900 pb-2 ">
          Progreso
        </span>
        <StatusByYear subjects={subjects} />
        <span className=" lg:w-full text-4xl font-bold border-b-2 border-stone-900 pb-2 ">
          Materias
        </span>
        <Filters
          setFilteredSubjects={setFilteredSubjects}
          subjects={subjects}
        />
        <ul className=" flex justify-center mx-0 flex-wrap text-stone-200">
          {filteredSubjects.map((e, id) => {
            return (
              <Row
                subject={e}
                isAvailable={isAvailable(e, subjects)}
                key={id}
              />
            );
          })}
        </ul>
      </div>
    );
  } else return null;
}

export default Home;
