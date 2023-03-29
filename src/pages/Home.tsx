import { useState } from "react";
import subjects from "../data/subjects.json";

import Filters from "../components/Filters";
import Row from "../components/Row";
import StatusByYear from "../components/StatusByYear";
function Home() {
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  return (
    <div className=" grid grid-flow-row auto-rows-max text-center gap-y-px	max-w-7xl m-auto">
      <h1 className="text-4xl font-bold border-b-2 border-stone-900 pb-2 ">
        Progreso
      </h1>
      <StatusByYear subjects={subjects} />
      <h1 className="text-4xl font-bold border-b-2 border-stone-900 pb-2 ">
        Materias
      </h1>
      <Filters setFilteredSubjects={setFilteredSubjects} />
      <ul className=" flex justify-center flex-wrap">
        {filteredSubjects.map((e, id) => {
          return <Row subject={e} key={id} />;
        })}
      </ul>
    </div>
  );
}

export default Home;
