import { useEffect, useState } from "react";
import subjects from "../data/subjects.json";

import Filters from "../components/Filters";
import Row from "../components/Row";
import StatusByYear from "../components/StatusByYear";
function Home() {
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  return (
    <div className=" grid grid-flow-row auto-rows-max border-solid border-2 border-indigo-600 text-center gap-y-px		">
      <h1 className="text-4xl font-bold underline">Subjects</h1>
      <StatusByYear subjects={subjects} />
      <Filters setFilteredSubjects={setFilteredSubjects} />
      {filteredSubjects.map((e, id) => {
        return <Row subject={e} key={id} />;
      })}
    </div>
  );
}

export default Home;
